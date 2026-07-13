import { Routes } from '@angular/router';
import { CabinetDetailComponent } from './pages/cabinet-detail.component/cabinet-detail.component';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/auth/login/login.component').then((m) => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/auth/register/register.component').then((m) => m.RegisterComponent) },
  { path: 'accueil', loadComponent: () => import('./pages/auth/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
  { path: 'dashboard', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'details', component: CabinetDetailComponent },
];


