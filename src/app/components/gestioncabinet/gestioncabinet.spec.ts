import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestioncabinet } from './gestioncabinet';

describe('Gestioncabinet', () => {
  let component: Gestioncabinet;
  let fixture: ComponentFixture<Gestioncabinet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestioncabinet],
    }).compileComponents();

    fixture = TestBed.createComponent(Gestioncabinet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
