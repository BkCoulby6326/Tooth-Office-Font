import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onglet } from './onglet';

describe('Onglet', () => {
  let component: Onglet;
  let fixture: ComponentFixture<Onglet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onglet],
    }).compileComponents();

    fixture = TestBed.createComponent(Onglet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
