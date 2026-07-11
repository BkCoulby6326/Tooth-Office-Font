import { Service } from '@angular/core';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanAbonnement } from '../../models/plan-abonnement';

@Injectable({
  providedIn: 'root'
})
export class PlanAbonnementService {

  private apiUrl = 'http://localhost:8080/api/plan_abonnement';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PlanAbonnement[]> {
    return this.http.get<PlanAbonnement[]>(this.apiUrl);
  }

  getById(id: number): Observable<PlanAbonnement> {
    return this.http.get<PlanAbonnement>(`${this.apiUrl}/${id}`);
  }

  create(plan: PlanAbonnement): Observable<PlanAbonnement> {
    return this.http.post<PlanAbonnement>(this.apiUrl, plan);
  }

  update(id: number, plan: PlanAbonnement): Observable<PlanAbonnement> {
    return this.http.put<PlanAbonnement>(`${this.apiUrl}/${id}`, plan);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}