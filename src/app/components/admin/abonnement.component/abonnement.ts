import { Component, inject } from '@angular/core';
import { AbonnementService } from '../../../Services/abonnement.service';
import { PlanAbonnement } from '../../../models/plan-abonnement';
import { PlanAbonnementService } from '../../../Services/Plan-Abonnement-Service/plan-abonnement-service';

@Component({
  selector: 'app-abonnement',
  imports: [],
  templateUrl: './abonnement.html',
  styleUrl: './abonnement.css',
})
export class Abonnement {

  planAbonnements = inject( PlanAbonnementService);
  plans:  PlanAbonnement[] = [];

  ngOnInit() {
    this.recupererAbonnements();
  }

  recupererAbonnementparId(id: number) {
    this.planAbonnements.getById(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de l\'abonnement :', error);
      }
    });
  }

  recupererAbonnements() {
    this.planAbonnements.getAll().subscribe({
      next: (data) => {
        this.plans = data;
        console.log(data);
       

      },
      error: (error) => {
        console.error('Erreur lors de la récupération des abonnements :', error);
      }
    });
  }
}
