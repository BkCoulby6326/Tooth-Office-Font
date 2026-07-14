import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Prestation } from '../models/Prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  //private apiUrl = environment.apiUrl;

  //private http = inject(HttpClient);
  private apiUrl = '/prestations';

  constructor(private http: HttpClient) { }

  //Ajouter une prestation

  create(prestation: Prestation): Observable<Prestation> {
    return this.http.post<Prestation>(`${this.apiUrl}/prestations`, prestation);
  }

  // Récupérer toutes les prestations

  getAll(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(`${this.apiUrl}/prestations`);
  }

  //Récupérer une prestation

  getById(id: number): Observable<Prestation> {
    return this.http.get<Prestation>(`${this.apiUrl}/prestations/${id}`);
  }

  // Modifier une prestation

  update(id: number, prestation: Prestation): Observable<Prestation> {
    return this.http.put<Prestation>(`${this.apiUrl}/prestations/${id}`, prestation);
  }

  //Supprimer une prestation

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/prestations/${id}`);
  }
}