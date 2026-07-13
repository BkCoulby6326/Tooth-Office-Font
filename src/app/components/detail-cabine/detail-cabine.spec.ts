import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCabine } from './detail-cabine';

describe('DetailCabine', () => {
  let component: DetailCabine;
  let fixture: ComponentFixture<DetailCabine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCabine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCabine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
