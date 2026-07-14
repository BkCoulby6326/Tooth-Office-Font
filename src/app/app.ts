import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanAbonnementListComponent } from './components/Plan-Abonnement/plan-abonnement-list-component/plan-abonnement-list-component';
import { SoinTarifComponent } from './soin-tarif/soin-tarif';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tooth_office');
}
