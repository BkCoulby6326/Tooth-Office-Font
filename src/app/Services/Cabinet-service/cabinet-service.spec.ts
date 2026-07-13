import { TestBed } from '@angular/core/testing';

import { cabinetService } from './cabinet-service';

describe('cabinetService', () => {
  let service: cabinetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cabinetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
