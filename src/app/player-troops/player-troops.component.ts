import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-player-troops',
  standalone: true,
  imports: [],
  templateUrl: './player-troops.component.html',
  styleUrl: './player-troops.component.css'
})
export class PlayerTroopsComponent {
  @Input() name?: string;
}
