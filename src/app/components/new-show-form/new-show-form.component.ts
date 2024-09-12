import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, EventEmitter, Output} from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-show-form',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './new-show-form.component.html',
  styleUrl: './new-show-form.component.css'
})

export class NewShowFormComponent {
  @Output()
  public createElement: EventEmitter<Show> = new EventEmitter();

  public form: FormGroup;
  public isFormSubmitted: boolean = false;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
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
      this.createElement.emit(newShow);
      this.form.reset();
      this.isFormSubmitted = false;
    } else {
      console.log("Something is wrong");
    }
  }
}
