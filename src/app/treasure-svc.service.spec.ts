import { TestBed } from '@angular/core/testing';

import { TreasureSvcService } from './treasure-svc.service';

describe('TreasureSvcService', () => {
  let service: TreasureSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreasureSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
