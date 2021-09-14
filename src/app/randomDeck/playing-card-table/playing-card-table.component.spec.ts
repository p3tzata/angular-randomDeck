import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardTableComponent } from './playing-card-table.component';

describe('PlayingCardTableComponent', () => {
  let component: PlayingCardTableComponent;
  let fixture: ComponentFixture<PlayingCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingCardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
