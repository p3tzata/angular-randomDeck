import { TestBed } from '@angular/core/testing';

import { PlayingCardServiceService } from './playing-card-service.service';

describe('PlayingCardServiceService', () => {
  let service: PlayingCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
