import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((r) => r.HOME_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./components/cabinet-detail/route.cabinet-detail')
        .then((r) => r.CABINETDETAIL_ROUTES),
  },

  {
    path: '**',
    redirectTo: '',
  },
];


