import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretairePageComponent } from './secretaire-page.component';

describe('SecretairePageComponent', () => {
  let component: SecretairePageComponent;
  let fixture: ComponentFixture<SecretairePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretairePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecretairePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
