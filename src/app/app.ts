import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanAbonnementListComponent } from './components/Plan-Abonnement/plan-abonnement-list-component/plan-abonnement-list-component';
import { GestionUtilisateursComponent } from './components/admin/gestion-utilisateurs/gestion-utilisateurs';
//import { PlanAbonnementListComponent } from './components/Plan-Abonnement/plan-abonnement-list-component/plan-abonnement-list-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlanAbonnementListComponent, GestionUtilisateursComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tooth_office');
}
