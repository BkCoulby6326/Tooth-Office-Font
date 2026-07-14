import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DossierMedical } from '../models/dossier-medical';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService {
  private apiUrl = 'http://localhost:8080/api/dossiers-medicaux';

  constructor(private http: HttpClient) {}

  getAllDossiers(): Observable<DossierMedical[]> {
    return this.http.get<DossierMedical[]>(this.apiUrl);
  }

  getDossierById(id: number): Observable<DossierMedical> {
    return this.http.get<DossierMedical>(`${this.apiUrl}/${id}`);
  }

  getDossierByPatientId(patientId: number): Observable<DossierMedical> {
    return this.http.get<DossierMedical>(`${this.apiUrl}/patient/${patientId}`);
  }

  createDossier(dossier: DossierMedical): Observable<DossierMedical> {
    return this.http.post<DossierMedical>(this.apiUrl, dossier);
  }

  updateDossier(id: number, dossier: DossierMedical): Observable<DossierMedical> {
    return this.http.put<DossierMedical>(`${this.apiUrl}/${id}`, dossier);
  }

  deleteDossier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}