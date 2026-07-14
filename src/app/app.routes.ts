import { Routes } from '@angular/router';



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


