import { Service } from '@angular/core';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanAbonnement } from '../../models/plan-abonnement';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlanAbonnementService {

  

  constructor(private http: HttpClient) {}

  private readonly url = `${environment.apiUrl}/plan-abonnements`;

  getAll(): Observable<PlanAbonnement[]> {
    return this.http.get<PlanAbonnement[]>(this.url);
  }

  getById(id: number): Observable<PlanAbonnement> {
    return this.http.get<PlanAbonnement>(`${this.url}/${id}`);
  }

  create(plan: PlanAbonnement): Observable<PlanAbonnement> {
    return this.http.post<PlanAbonnement>(this.url, plan);
  }

  update(id: number, plan: PlanAbonnement): Observable<PlanAbonnement> {
    return this.http.put<PlanAbonnement>(`${this.url}/${id}`, plan);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}