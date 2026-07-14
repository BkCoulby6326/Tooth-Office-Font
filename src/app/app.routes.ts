import { Routes } from '@angular/router';
import { SecretairePageComponent } from './components/secretaire-page.component/secretaire-page.component';
// import { AvisTest } from './components/Avis-Test/avis-test/avis-test';



export const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((r) => r.HOME_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./components/cabinet-detail/route.cabinet-detail')
        .then((r) => r.CABINETDETAIL_ROUTES),
  },
=======
   {
        path: '',
        loadChildren: () =>
            import('./home/home.routes')
                .then(r => r.HOME_ROUTES)
    },
    {path: 'admin',loadComponent: () => import('./components/admin/admin').then(c => c.Admin)},
>>>>>>> a3ee2c2d537652230ad1da5529ed3ca04efcde06

  {
    path: '**',
    redirectTo: '',
  },
];


];
