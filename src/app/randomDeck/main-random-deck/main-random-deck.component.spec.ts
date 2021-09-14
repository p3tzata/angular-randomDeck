import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRandomDeckComponent } from './main-random-deck.component';

describe('MainRandomDeckComponent', () => {
  let component: MainRandomDeckComponent;
  let fixture: ComponentFixture<MainRandomDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRandomDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRandomDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
