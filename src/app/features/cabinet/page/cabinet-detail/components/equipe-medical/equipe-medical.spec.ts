import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeMedical } from './equipe-medical';

describe('EquipeMedical', () => {
  let component: EquipeMedical;
  let fixture: ComponentFixture<EquipeMedical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeMedical],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipeMedical);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});