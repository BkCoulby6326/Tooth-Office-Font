import { Routes } from '@angular/router';

export const CABINETDETAIL_ROUTES: Routes = [
  {
    path: 'cabinet-detail/:id',
    loadComponent: () => import('./page/cabinet-detaill/cabinet-detaill')
      .then((c) => c.CabinetDetaill),
  },
];
