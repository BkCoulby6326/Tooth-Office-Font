import { Routes } from '@angular/router';

import { CabinetDetailComponent } from './pages/cabinet-detail.component/cabinet-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'avis', pathMatch: 'full' },
  { path: 'detail', component: CabinetDetailComponent }
];


