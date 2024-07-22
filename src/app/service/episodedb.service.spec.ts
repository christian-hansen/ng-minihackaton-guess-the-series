import { TestBed } from '@angular/core/testing';

import { EpisodedbService } from './episodedb.service';

describe('EpisodedbService', () => {
  let service: EpisodedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
