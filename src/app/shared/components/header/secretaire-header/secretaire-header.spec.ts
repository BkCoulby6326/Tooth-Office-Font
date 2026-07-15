import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireHeader } from './secretaire-header';

describe('SecretaireHeader', () => {
  let component: SecretaireHeader;
  let fixture: ComponentFixture<SecretaireHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaireHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(SecretaireHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
