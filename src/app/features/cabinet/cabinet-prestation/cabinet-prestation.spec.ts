import { TestBed } from '@angular/core/testing';

import { CabinetPrestation } from './cabinet-prestation';

describe('CabinetPrestation', () => {
  let service: CabinetPrestation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinetPrestation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
