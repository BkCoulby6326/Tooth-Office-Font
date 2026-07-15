import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifMedecin } from './tarif-medecin';

describe('TarifMedecin', () => {
  let component: TarifMedecin;
  let fixture: ComponentFixture<TarifMedecin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifMedecin],
    }).compileComponents();

    fixture = TestBed.createComponent(TarifMedecin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
