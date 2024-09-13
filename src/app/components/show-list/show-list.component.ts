import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShowCardComponent } from "../show-card/show-card.component";
import { NgFor } from '@angular/common';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [ShowCardComponent, NgFor,],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})

export class ShowListComponent {
  @Output()
  public deleteCard: EventEmitter<string> = new EventEmitter();

  @Output()
  public editCard: EventEmitter<Show> = new EventEmitter();

  @Input()
  public shows: Show[] = [];

  public deleteElement(name: string): void {
    this.deleteCard.emit(name);
  }

  public editElement(show: Show): void {
    this.editCard.emit(show);
  }
}
