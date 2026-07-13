import { Routes } from '@angular/router';

import { AvisTest } from './components/Avis-Test/avis-test/avis-test';

export const routes: Routes = [
  { path: 'avis', component: AvisTest },
  { path: '', redirectTo: 'avis', pathMatch: 'full' },
  { path : '/morbin', component : CabinetDetailComponent}
];


