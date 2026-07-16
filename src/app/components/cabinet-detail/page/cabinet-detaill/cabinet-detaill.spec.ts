import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetDetaill } from './cabinet-detaill';

describe('CabinetDetaill', () => {
  let component: CabinetDetaill;
  let fixture: ComponentFixture<CabinetDetaill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetDetaill],
    }).compileComponents();

    fixture = TestBed.createComponent(CabinetDetaill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
