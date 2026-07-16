import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisSurCabinet } from './avis-sur-cabinet';

describe('AvisSurCabinet', () => {
  let component: AvisSurCabinet;
  let fixture: ComponentFixture<AvisSurCabinet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisSurCabinet],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisSurCabinet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
