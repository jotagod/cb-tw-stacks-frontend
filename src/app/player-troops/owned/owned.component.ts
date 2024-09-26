import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Troop } from './owned.model';

@Component({
  selector: 'app-owned',
  standalone: true,
  imports: [],
  templateUrl: './owned.component.html',
  styleUrl: './owned.component.css'
})
export class OwnedComponent {
  @Input({ required: true }) troop!: Troop;
  @Output() removeTroop = new EventEmitter<string>();

  onRemoveTroop() {
    this.removeTroop.emit(this.troop.id);
  }
}
