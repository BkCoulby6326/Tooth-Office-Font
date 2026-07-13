import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { DetailsCabinet } from './components/details-cabinet/details-cabinet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , DetailsCabinet],
=======
import { PlanAbonnementListComponent } from './components/Plan-Abonnement/plan-abonnement-list-component/plan-abonnement-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlanAbonnementListComponent],
>>>>>>> 5f3b1d86ef9121aa6bc0ae86899d2a1aa95769f9
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tooth_office');
}
