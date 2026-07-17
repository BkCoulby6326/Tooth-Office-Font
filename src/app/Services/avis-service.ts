import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InputSignal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AvisDetail, AvisRequest } from '../models/avis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private http = inject(HttpClient);
  private url = environment.apiUrl + '/avis';
  create(dto: AvisRequest): Observable<AvisDetail> {
    return this.http.post<AvisDetail>(this.url, dto);
  }

  getByCabinet(cabinetId: number): Observable<AvisDetail[]> {
    console.log('Cabinet demandé :', cabinetId);
    return this.http.get<AvisDetail[]>(`${this.url}/cabinet/${cabinetId}`);
  }

  // // GET /api/avis → tous les avis
  //getAll(): Observable<AvisDetail[]> {
  //return this.http.get<AvisDetail[]>(this.url);
  //}
  // // GET /api/avis/{id} → un avis par ID
  // getById(id: number): Observable<AvisDetail> {
  //   return this.http.get<AvisDetail>(`${this.url}/${id}`);
  // }
  // // PUT /api/avis/{id} → modifier un avis
  // update(id: number, dto: AvisRequest): Observable<AvisDetail> {
  //   return this.http.put<AvisDetail>(`${this.url}/${id}`, dto);
  // }
  // // DELETE /api/avis/{id} → supprimer un avis
  // delete(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.url}/${id}`);
  // }
  // // GET /api/avis/patient/{id} → avis d'un patient
  // getByPatient(patientId: number): Observable<AvisDetail[]> {
  //   return this.http.get<AvisDetail[]>(`${this.url}/patient/${patientId}`);
  // }
}
