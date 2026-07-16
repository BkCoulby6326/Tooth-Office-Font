import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButttonRetour } from './buttton-retour';

describe('ButttonRetour', () => {
  let component: ButttonRetour;
  let fixture: ComponentFixture<ButttonRetour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButttonRetour],
    }).compileComponents();

    fixture = TestBed.createComponent(ButttonRetour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
