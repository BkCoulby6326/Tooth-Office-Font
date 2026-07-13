import { TestBed } from '@angular/core/testing';

import { PlanAbonnement } from './plan-abonnement';

describe('PlanAbonnement', () => {
  let service: PlanAbonnement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanAbonnement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
