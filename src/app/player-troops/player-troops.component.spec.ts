import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTroopsComponent } from './player-troops.component';

describe('PlayerTroopsComponent', () => {
  let component: PlayerTroopsComponent;
  let fixture: ComponentFixture<PlayerTroopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerTroopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTroopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
