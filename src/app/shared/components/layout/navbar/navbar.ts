import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../../../core/services/auth.service';
import { NAVIGATION_ITEMS, NavItem, UserRole } from '../../../../core/navigation/navigation.model';
import { UserProfile } from '../../../../core/models/auth/auth.model';

/** Lien unique affiché aux visiteurs non connectés. */
const GUEST_NAV: readonly NavItem[] = [
  { label: 'Accueil', route: '/', icon: 'home' },
];

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, NgFor, NgIf, RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly currentUser$ = this.authService.currentUser$;

  visibleItems(user: UserProfile | null): readonly NavItem[] {
    if (!user) {
      // Visiteur non connecté → Accueil uniquement
      return GUEST_NAV;
    }

    const role = user.role as UserRole;

    // On filtre les items qui correspondent à ce rôle
    return NAVIGATION_ITEMS.filter(
      (item) => item.roles?.includes(role) ?? false
    );
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: () => {
        this.authService.clearSession();
        this.router.navigateByUrl('/');
      }
    });
  }
}
