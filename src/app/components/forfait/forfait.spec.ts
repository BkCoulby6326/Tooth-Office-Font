import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfait } from './forfait';

describe('Forfait', () => {
  let component: Forfait;
  let fixture: ComponentFixture<Forfait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forfait],
    }).compileComponents();

    fixture = TestBed.createComponent(Forfait);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
