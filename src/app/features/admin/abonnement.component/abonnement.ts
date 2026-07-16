import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AbonnementService } from '../../abonnement/abonnement.service';
import { PlanAbonnement } from '../../../core/models/abonnement/plan-abonnement';
import { PlanAbonnementService } from '../../abonnement/plan-abonnement';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-abonnement',
  imports: [],
  templateUrl: './abonnement.html',
  styleUrl: './abonnement.css',
})
export class Abonnement {

  private cd = inject(ChangeDetectorRef);
  planAbonnements = inject(PlanAbonnementService);
  plans:  PlanAbonnement[] = [];

  ngOnInit() {
    this.recupererAbonnements();
  }

  // recupererAbonnementparId(id: number) {
  //   this.planAbonnements.getById(id).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (error) => {
  //       console.error('Erreur lors de la récupération de l\'abonnement :', error);
  //     }
  //   });
  // }

  recupererAbonnements() {
    this.planAbonnements.getAll().subscribe({
      next: (data) => {
        this.cd.detectChanges(); // Déclenche la détection des changements pour mettre à jour la vue
        this.plans = data;
        console.log(data);


      },
      error: (error) => {
        console.error('Erreur lors de la récupération des abonnements :', error);
      }
    });
  }

  // recupererAbonnements() {
  //   this.planAbonnements.get<PlanAbonnement[]>('http://localhost:8080/api/plan_abonnement').subscribe({
  //     next: (data) => {
  //       this.plans = data;
  //       console.log(data);
  //     },
  //     error: (error) => {
  //       console.error('Erreur lors de la récupération des abonnements :', error);
  //     }
  //   });
  // }

}
