import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCabinet } from './details-cabinet';

describe('DetailsCabinet', () => {
  let component: DetailsCabinet;
  let fixture: ComponentFixture<DetailsCabinet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCabinet],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsCabinet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});