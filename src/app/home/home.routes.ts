import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./pages/home-public/home-public')
                .then(c => c.HomePublic)
    },

    {
        path: 'patient',
        loadComponent: () =>
            import('./pages/home-patient/home-patient')
                .then(c => c.HomePatient)
    }



];
