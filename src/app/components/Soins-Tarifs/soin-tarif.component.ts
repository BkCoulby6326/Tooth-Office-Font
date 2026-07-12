import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Soin } from '../../models/soin';
import { SoinService } from '../../Services/soin.service';

@Component({
  selector: 'app-soin-tarif',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './soin-tarif.component.html'
})
export class SoinTarifComponent implements OnInit {
  soins: Soin[] = [];
  soinForm!: FormGroup;
  isLoading: boolean = false;

  typesDeSoins: string[] = [
    'Consultation dentaire standar',
    'Détartrage & polissage',
    'Blanchissement dentaire professionnel'
  ];

  constructor(private fb: FormBuilder, private soinService: SoinService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadSoins();
  }

  initForm(): void {
    this.soinForm = this.fb.group({
      typeSoin: ['', Validators.required],
      tarifClinique: [0, [Validators.required, Validators.min(0)]],
      duree: [30, [Validators.required, Validators.min(1)]]
    });
  }

  loadSoins(): void {
    this.isLoading = true;
    this.soinService.getSoins().subscribe({
      next: (data) => {
        this.soins = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Erreur: Le serveur Spring Boot est inaccessible.');
      }
    });
  }

  onSubmit(): void {
    if (this.soinForm.valid) {
      this.soinService.createSoin(this.soinForm.value).subscribe({
        next: (newSoin) => {
          this.soins.push(newSoin);
          this.soinForm.reset({ tarifClinique: 0, duree: 30 });
          alert('Tarif enregistré avec succès !');
        },
        error: () => alert('Échec de l\'enregistrement du soin.')
      });
    } else {
      this.soinForm.markAllAsTouched();
    }
  }

  onDelete(id: number | undefined): void {
    if (id && confirm('Voulez-vous vraiment supprimer ce soin ?')) {
      this.soinService.deleteSoin(id).subscribe({
        next: () => {
          this.soins = this.soins.filter(s => s.id !== id);
          alert('Soin supprimé !');
        },
        error: () => alert('Erreur lors de la suppression.')
      });
    }
  }
}