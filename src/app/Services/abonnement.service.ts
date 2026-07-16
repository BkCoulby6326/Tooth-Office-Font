import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abonnement } from '../models/abonnement.model';
import { EtatAbonnement } from '../enums/etat-abonnement.enum';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  private apiUrl = 'http://localhost:8080/api/abonnements';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(this.apiUrl);
  }


  getById(id: number): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.apiUrl}/${id}`);
  }


  create(abonnement: Abonnement): Observable<Abonnement> {
    return this.http.post<Abonnement>(this.apiUrl, abonnement);
  }


  update(id: number, abonnement: Abonnement): Observable<Abonnement> {
    return this.http.put<Abonnement>(
      `${this.apiUrl}/${id}`,
      abonnement
    );
  }


  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  changeStatus(id: number, nouveauStatut: EtatAbonnement): Observable<Abonnement> {
    return this.http.patch<Abonnement>(
      `${this.apiUrl}/${id}/statut?nouveauStatut=${nouveauStatut}`,
      {}
    );
  }


  getByCabinet(idCabinet: number): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(
      `${this.apiUrl}/cabinet/${idCabinet}`
    );
  }

  getByPlan(idPlan: number): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(
      `${this.apiUrl}/plan/${idPlan}`
    );
  }
}