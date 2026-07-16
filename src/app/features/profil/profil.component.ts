import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { FormInputComponent } from '../../shared/components/inputs/form-input/form-input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly toast = inject(ToastService);

  readonly currentUser$ = this.authService.currentUser$;

  profileForm: FormGroup;
  isEditing = false;
  isSaving = false;

  constructor() {
    this.profileForm = this.fb.group({
      nom: [{ value: '', disabled: true }, Validators.required],
      prenom: [{ value: '', disabled: true }, Validators.required],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      telephone: [{ value: '', disabled: true }, [Validators.pattern(/^\+?[0-9\s.-]{7,15}$/)]],
      adresse: [{ value: '', disabled: true }]
    });

    // Remplir le formulaire avec les infos de l'utilisateur connecté
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.profileForm.patchValue({
          nom: user.nom || '',
          prenom: user.prenom || '',
          email: user.email || '',
          telephone: '', // Vous pouvez lier les autres champs du profil réel ici
          adresse: ''
        });
      }
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.profileForm.enable();
      this.profileForm.get('email')?.disable(); // L'email reste toujours désactivé
    } else {
      this.profileForm.disable();
      // Recharger les données si annulation
      this.authService.currentUser$.subscribe(user => {
        if (user) {
          this.profileForm.patchValue({
            nom: user.nom || '',
            prenom: user.prenom || '',
            email: user.email || ''
          });
        }
      });
    }
  }

  saveProfile(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.isSaving = true;
    // Simulation d'une sauvegarde
    setTimeout(() => {
      this.isSaving = false;
      this.isEditing = false;
      this.toast.success('Profil mis à jour avec succès');
    }, 800);
  }
}
