import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarif } from './tarif';

describe('Tarif', () => {
  let component: Tarif;
  let fixture: ComponentFixture<Tarif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarif],
    }).compileComponents();

    fixture = TestBed.createComponent(Tarif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
