import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output()
  sortAlpha = new EventEmitter<void>();
  @Output()
  reverseOrder = new EventEmitter<void>();

  onSortAlpha() {
    this.sortAlpha.emit();
  }

  onReverseOrder() {
    this.reverseOrder.emit();
  }
}
