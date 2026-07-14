import { Routes } from '@angular/router';
import { SecretairePageComponent } from './components/secretaire-page.component/secretaire-page.component';
// import { AvisTest } from './components/Avis-Test/avis-test/avis-test';



export const routes: Routes = [
   {
        path: '',
        loadChildren: () =>
            import('./home/home.routes')
                .then(r => r.HOME_ROUTES)
    },
    {path: 'admin',loadComponent: () => import('./components/admin/admin').then(c => c.Admin)},

    {
        path: '**',
        redirectTo: ''
    }
];


];
