import { Routes } from '@angular/router';
import { roleGuard } from './core/auth/guards/role.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/register/register.component').then((m) => m.RegisterComponent),
  },
  // {
  //   path: 'accueil',
  //   loadComponent: () =>
  //     import('./pages/auth/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  // },
  { path: 'dashboard', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {
    path: 'cabinet/gestion',
    loadComponent: () => import('./soin-tarif/soin-tarif').then((m) => m.SoinTarifComponent),
    pathMatch: 'full',
    canActivate: [roleGuard],
    data: { roles: ['ADMIN_SYSTEM', 'CHEF_CABINET', 'DENTISTE'] },
  },

   {
        path: '',
        loadChildren: () =>
            import('./home/home.routes')
                .then(r => r.HOME_ROUTES)
    },

     {
        path: '',
        loadChildren: () =>
            import('./components/cabinet-detail/route.cabinet-detail')
                .then(r => r.CABINETDETAIL_ROUTES)
    },
    {
      path: 'admin',
      loadComponent: () => import('./components/admin/admin').then(c => c.Admin),
      canActivate: [roleGuard],
      data: { roles: ['ADMIN_SYSTEM'] }
    },

  {
    path: '**',
    redirectTo: '',
  },
];

