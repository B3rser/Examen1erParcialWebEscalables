import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})

export class ShowCardComponent {
  @Output()
  public deleteCard: EventEmitter<string> = new EventEmitter();
  
  @Output()
  public editCard: EventEmitter<Show> = new EventEmitter();

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

  public isSelected: boolean = false;

  public changeSelected(): void {
    this.isSelected = !this.isSelected
  }

  public onDeleteCard(){
    this.deleteCard.emit(this.show.name);
  }

  public onEditCard(){
    this.editCard.emit(this.show);
  }
}
