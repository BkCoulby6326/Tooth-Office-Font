import { Routes } from '@angular/router';
//import { AvisTestComponent } from './components/Avis-Test/avis-test/avis-test.component';


export const routes: Routes = [
  //{ path: 'avis', component: AvisTestComponent },
  { path: '', redirectTo: 'gestion-cabinet', pathMatch: 'full' },
];