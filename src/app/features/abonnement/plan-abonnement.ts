import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanAbonnement } from '../../core/models/abonnement/plan-abonnement'; // Ajustez le chemin
import { environment } from '../../../environments/environment.development';

// Si votre DTO est différent de l'entité, créez une interface PlanAbonnementDTO
// Sinon, réutilisez PlanAbonnement
export type PlanAbonnementDTO = Partial<PlanAbonnement>;

@Injectable({
  providedIn: 'root'
})
export class PlanAbonnementService {
  private readonly http = inject(HttpClient);
  private  apiUrl = environment.apiUrl + 'api/plan_abonnement';

  /**
   * CREATE : POST /api/plan_abonnement
   */
  create(plan: PlanAbonnementDTO): Observable<PlanAbonnement> {
    return this.http.post<PlanAbonnement>(this.apiUrl, plan);
  }

  /**
   * UPDATE : PUT /api/plan_abonnement/{id}
   * Note: Le contrôleur retourne un PlanAbonnement (entité) et non un DTO.
   */
  update(id: number, plan: PlanAbonnementDTO): Observable<PlanAbonnement> {
    return this.http.put<PlanAbonnement>(`${this.apiUrl}/${id}`, plan);
  }

  /**
   * DELETE : DELETE /api/plan_abonnement/{id}
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * GET BY ID : GET /api/plan_abonnement/{id}
   */
  getById(id: number): Observable<PlanAbonnement> {
    return this.http.get<PlanAbonnement>(`${this.apiUrl}/${id}`);
  }

  /**
   * GET ALL : GET /api/plan_abonnement
   */
  getAll(): Observable<PlanAbonnement[]> {
    return this.http.get<PlanAbonnement[]>(this.apiUrl);
  }
}
