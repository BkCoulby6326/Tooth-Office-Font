import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DossierMedical } from '../../models/dossier-medical';
import { DossierMedicalService } from '../../Services/dossier-medical.service';

@Component({
  selector: 'app-dossier-medical',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dossier-medical.component.html'
})
export class DossierMedicalComponent implements OnInit {
  dossiers: DossierMedical[] = [];
  dossierForm!: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private dossierService: DossierMedicalService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDossiers();
  }

  initForm(): void {
    this.dossierForm = this.fb.group({
      patientId: ['', [Validators.required, Validators.min(1)]],
      antecedents: ['', Validators.required],
      allergies: ['', Validators.required],
      historiques: ['', Validators.required]
    });
  }

  loadDossiers(): void {
    this.isLoading = true;
    this.dossierService.getAllDossiers().subscribe({
      next: (data) => {
        this.dossiers = data;
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

  onSubmit(): void {
    if (this.dossierForm.valid) {
      this.dossierService.createDossier(this.dossierForm.value).subscribe({
        next: (newDossier) => {
          this.dossiers.push(newDossier);
          this.dossierForm.reset();
          alert('Dossier médical créé avec succès !');
        },
        error: () => alert('Erreur lors de la création du dossier.')
      });
    } else {
      this.dossierForm.markAllAsTouched();
    }
  }
}