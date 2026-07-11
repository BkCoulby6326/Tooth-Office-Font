import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAbonnementListComponent } from './plan-abonnement-list-component';

describe('PlanAbonnementListComponent', () => {
  let component: PlanAbonnementListComponent;
  let fixture: ComponentFixture<PlanAbonnementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanAbonnementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanAbonnementListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
