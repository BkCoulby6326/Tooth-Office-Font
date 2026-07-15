import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/services/auth.service';
import { FormInputComponent } from '../../../shared/components/inputs/form-input/form-input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly registerForm = new FormGroup({
    nom: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    prenom: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    telephone: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    motDePasse: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }),
    confirmationMotDePasse: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    role: new FormControl<'PATIENT'>('PATIENT', { nonNullable: true, validators: [Validators.required] })
  });

  errorMessage = '';
  isSubmitting = false;

  submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    if (this.registerForm.value.motDePasse !== this.registerForm.value.confirmationMotDePasse) {
      this.errorMessage = 'La confirmation du mot de passe ne correspond pas.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.authService.register({
      nom: this.registerForm.value.nom ?? '',
      prenom: this.registerForm.value.prenom ?? '',
      email: this.registerForm.value.email ?? '',
      telephone: this.registerForm.value.telephone ?? '',
      motDePasse: this.registerForm.value.motDePasse ?? '',
      role: this.registerForm.value.role ?? 'PATIENT'
    }).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => {
        this.errorMessage = 'Impossible de créer le compte pour le moment.';
        this.isSubmitting = false;
      }
    });
  }
}
