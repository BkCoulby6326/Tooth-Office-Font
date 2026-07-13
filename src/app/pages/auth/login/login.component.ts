import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loginForm = new FormGroup({
    identifier: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    motDePasse: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  errorMessage = '';
  isSubmitting = false;

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const identifier = this.loginForm.value.identifier?.trim() ?? '';
    const isPhone = /^\+?[0-9\s.-]{7,15}$/.test(identifier);

    this.authService.login({
      ...(isPhone ? { telephone: identifier } : { email: identifier }),
      motDePasse: this.loginForm.value.motDePasse ?? ''
    }).subscribe({
      next: () => this.router.navigate(['/accueil']),
      error: () => {
        this.errorMessage = 'Identifiants invalides ou compte non autorisé.';
        this.isSubmitting = false;
      }
    });
  }
}
