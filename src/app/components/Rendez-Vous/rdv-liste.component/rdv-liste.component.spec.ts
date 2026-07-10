import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvListeComponent } from './rdv-liste.component';

describe('RdvListeComponent', () => {
  let component: RdvListeComponent;
  let fixture: ComponentFixture<RdvListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvListeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RdvListeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
