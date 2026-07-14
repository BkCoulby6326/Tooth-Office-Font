import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimDialog } from './confim-dialog';

describe('ConfimDialog', () => {
  let component: ConfimDialog;
  let fixture: ComponentFixture<ConfimDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfimDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfimDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
