import { Component, Input } from '@angular/core';
import { OwnedComponent } from './owned/owned.component';

@Component({
  selector: 'app-player-troops',
  standalone: true,
  imports: [OwnedComponent],
  templateUrl: './player-troops.component.html',
  styleUrl: './player-troops.component.css',
})
export class PlayerTroopsComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  ownedTroops = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic all the basic and advanced featured of Angular & how to apply them.',
        dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Master java',
      summary:
        'Learn all the basic all the basic and advanced featured of Java & how to apply them.',
        dueDate: '2026-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master typescript',
      summary:
        'Learn all the basic all the basic and advanced featured of Tyoescript & how to apply them.',
        dueDate: '2027-12-31'
    },
  ];

  get selectedPlayerOwnedTroops() {
    return this.ownedTroops.filter((owned) => owned.userId === this.userId);
  }
}
