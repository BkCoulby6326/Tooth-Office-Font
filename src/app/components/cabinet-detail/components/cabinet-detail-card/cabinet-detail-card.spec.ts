import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetDetailCard } from './cabinet-detail-card';

describe('CabinetDetailCard', () => {
  let component: CabinetDetailCard;
  let fixture: ComponentFixture<CabinetDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CabinetDetailCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
