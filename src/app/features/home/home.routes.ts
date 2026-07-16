import { Routes } from '@angular/router';
import { roleGuard } from '../../core/guards/role.guard';

export const HOME_ROUTES: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./pages/home-public/home-public')
                .then(c => c.HomePublic)
    },

    {
        path: 'patient',
        canActivate: [roleGuard],
        data: { roles: ['PATIENT'] },
        loadComponent: () =>
            import('./pages/home-patient/home-patient')
                .then(c => c.HomePatient)
    }



];
