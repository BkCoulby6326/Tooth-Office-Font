import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { UserRole } from '../../navigation/navigation.model';
import { AuthService } from '../services/auth.service';

/** Enforces the same roles used by the navigation model. */
export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const allowedRoles = (route.data?.['roles'] as UserRole[] | undefined) ?? [];

  return authService.currentUser$.pipe(
    take(1),
    map((user) => {
      if (!user) {
        return router.createUrlTree(['/login']);
      }

      return allowedRoles.includes(user.role as UserRole)
        ? true
        : router.createUrlTree(['/']);
    })
  );
};
