import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((r) => r.HOME_ROUTES),
  },
  {
    path: '', // Laisse vide pour que l'URL devienne directement /cabinet-detail
    loadChildren: () =>
      import('./components/cabinet-detail/route.cabinet-detail') // Adaptez le chemin du fichier
        .then((r) => r.CABINETDETAIL_ROUTES),
  },

  {
    path: '**',
    redirectTo: '',
  },
];


