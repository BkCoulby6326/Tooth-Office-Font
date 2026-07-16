import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Traitement } from '../../core/models/traitement/traitement';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  private apiUrl = 'http://localhost:8080/traitements';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Traitement[]> {
    return this.http.get<Traitement[]>(this.apiUrl);
  }

  getById(id: number): Observable<Traitement> {
    return this.http.get<Traitement>(`${this.apiUrl}/${id}`);
  }

  save(traitement: Traitement): Observable<Traitement> {
    return this.http.post<Traitement>(this.apiUrl, traitement);
  }

  update(id: number, traitement: Traitement): Observable<Traitement> {
    return this.http.put<Traitement>(`${this.apiUrl}/${id}`, traitement);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
