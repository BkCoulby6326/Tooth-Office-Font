import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetCard } from './cabinet-card';

describe('CabinetCard', () => {
  let component: CabinetCard;
  let fixture: ComponentFixture<CabinetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CabinetCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
