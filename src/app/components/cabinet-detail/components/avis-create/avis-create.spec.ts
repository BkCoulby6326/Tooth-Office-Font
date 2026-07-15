import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisCreate } from './avis-create';

describe('AvisCreate', () => {
  let component: AvisCreate;
  let fixture: ComponentFixture<AvisCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
