import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabinets } from './cabinets';

describe('Cabinets', () => {
  let component: Cabinets;
  let fixture: ComponentFixture<Cabinets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabinets],
    }).compileComponents();

    fixture = TestBed.createComponent(Cabinets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
