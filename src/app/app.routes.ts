import { Routes } from '@angular/router';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
  },

  { path: 'dashboard', redirectTo: 'accueil', pathMatch: 'full' },

  // ── Soins & Tarifs (chef de cabinet) ──────────────────────────────
  {
    path: 'cabinet/gestion',
    loadComponent: () => import('./features/soin-tarif/soin-tarif').then((m) => m.SoinTarifComponent),
    pathMatch: 'full',
    canActivate: [roleGuard],
    data: { roles: ['ADMIN_SYSTEM', 'CHEF_CABINET', 'DENTISTE'] },
  },

  // ── Secrétaire ────────────────────────────────────────────────────
  {
    path: 'secretaire',
    loadComponent: () =>
      import('./features/secretaire/secretaire.component').then((m) => m.SecretaireComponent),
    canActivate: [roleGuard],
    data: { roles: ['SECRETAIRE'] },
  },

  // ── Dentiste ──────────────────────────────────────────────────────
  {
    path: 'dentiste',
    canActivate: [roleGuard],
    data: { roles: ['DENTISTE'] },
    loadComponent: () =>
      import('./features/dentiste/dentiste.component').then((m) => m.DentisteComponent),
  },
  {
    path: 'dentiste/planning',
    canActivate: [roleGuard],
    data: { roles: ['DENTISTE'] },
    loadComponent: () =>
      import('./features/dentiste/dentiste.component').then((m) => m.DentisteComponent),
  },
  {
    path: 'dentiste/cabinet',
    canActivate: [roleGuard],
    data: { roles: ['DENTISTE'] },
    loadComponent: () =>
      import('./features/dentiste/dentiste.component').then((m) => m.DentisteComponent),
  },

  // ── Chef de cabinet ───────────────────────────────────────────────
  {
    path: 'chef',
    canActivate: [roleGuard],
    data: { roles: ['CHEF_CABINET'] },
    loadComponent: () =>
      import('./features/chef-cabinet/chef-cabinet.component').then((m) => m.ChefCabinetComponent),
  },
  {
    path: 'chef/dashboard',
    canActivate: [roleGuard],
    data: { roles: ['CHEF_CABINET'] },
    loadComponent: () =>
      import('./features/chef-cabinet/chef-cabinet.component').then((m) => m.ChefCabinetComponent),
  },

  // ── Admin ─────────────────────────────────────────────────────────
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin').then(c => c.Admin),
    canActivate: [roleGuard],
    data: { roles: ['ADMIN_SYSTEM'] }
  },

  // ── Profil (global) ────────────────────────────────────────────────
  {
    path: 'profil',
    loadComponent: () =>
      import('./features/profil/profil.component').then((m) => m.ProfilComponent),
    canActivate: [roleGuard],
    data: { roles: ['ADMIN_SYSTEM', 'CHEF_CABINET', 'DENTISTE', 'SECRETAIRE', 'PATIENT'] }
  },

  // ── Pages publiques / patient ─────────────────────────────────────
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then(r => r.HOME_ROUTES)
  },

  {
    path: '',
    loadChildren: () =>
      import('./features/cabinet/cabinet-detail.route')
        .then(r => r.CABINETDETAIL_ROUTES)
  },

  { path: '**', redirectTo: '' },
];
