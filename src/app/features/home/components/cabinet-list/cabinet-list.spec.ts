import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetList } from './cabinet-list';

describe('CabinetList', () => {
  let component: CabinetList;
  let fixture: ComponentFixture<CabinetList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetList],
    }).compileComponents();

    fixture = TestBed.createComponent(CabinetList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
