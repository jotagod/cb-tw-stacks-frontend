import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-troop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-troop.component.html',
  styleUrl: './new-troop.component.css'
})
export class NewTroopComponent {
  @Output() cancel = new EventEmitter<void>()
  enteredTitle = '';
  enteredSummary ='';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();

  }
}
