import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SoinTarifComponent } from './soin-tarif';

describe('SoinTarifComponent', () => {
  let component: SoinTarifComponent;
  let fixture: ComponentFixture<SoinTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, // Ajouté pour éviter les erreurs avec [formGroup] pendant le test
        SoinTarifComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Plus adapté que whenStable() pour initialiser le composant ici
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});