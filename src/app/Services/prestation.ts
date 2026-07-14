import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prestation } from '../models/Prestation';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  ajouterPrestation(prestation: Prestation) {
    throw new Error('Method not implemented.');
  }
  getPrestations() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = environment.apiUrl;

  //private http = inject(HttpClient);

  constructor(private http: HttpClient) { }

  //Ajouter une prestation

  create(prestation: Prestation): Observable<Prestation> {
    return this.http.post<Prestation>(`${this.apiUrl}/prestation`, prestation);
  }

  // Récupérer toutes les prestations

  getAll(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(`${this.apiUrl}/prestation`);
  }

  //Récupérer une prestation

  getById(id: number): Observable<Prestation> {
    return this.http.get<Prestation>(`${this.apiUrl}/prestation/${id}`);
  }

  // Modifier une prestation

  update(id: number, prestation: Prestation): Observable<Prestation> {
    return this.http.put<Prestation>(`${this.apiUrl}/prestation/${id}`, prestation);
  }

  //Supprimer une prestation

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/prestation/${id}`);
  }
}
