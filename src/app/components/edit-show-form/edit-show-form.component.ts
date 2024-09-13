import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-show-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-show-form.component.html',
  styleUrl: './edit-show-form.component.css'
})
export class EditShowFormComponent implements OnChanges{
  @Input()
  public show: Show = {
    name: "",
    description: "",
    image: "",
    year: 0,
    episodes: 0,
    genre: "",
    likes: [],
  };

  @Input()
  public isActive: boolean = false;

  @Output()
  public editElement: EventEmitter<Show> = new EventEmitter();

  public form: FormGroup;
  public isFormSubmitted: boolean = false;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show'] && changes['show'].currentValue) {
      this.form.patchValue({
        name: this.show.name,
        image: this.show.image,
        description: this.show.description
      });
    }
  }


  public onFormSubmit(): void {
    this.isFormSubmitted = true;
    if (this.form.valid) {
      const newShow: Show = {
        description: this.form.value.description,
        episodes: 0,
        genre: "",
        image: this.form.value.image,
        likes: [],
        name: this.form.value.name,
        year: 0
      };
      this.editElement.emit(newShow);
      this.form.reset();
      this.isFormSubmitted = false;
    } else {
      console.log("Something is wrong");
    }
  }
}
