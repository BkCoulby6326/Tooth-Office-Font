import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanAbonnementListComponent } from './components/Plan-Abonnement/plan-abonnement-list-component/plan-abonnement-list-component';
import { Gestioncabinet } from "./components/gestioncabinet/gestioncabinet";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Gestioncabinet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tooth_office');
}
