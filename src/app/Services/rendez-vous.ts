import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { RendezVous } from '../models/rendez-vous';
import { ResponseApi } from '../models/ResponseApi';
import { RendezVousCreate } from '../models/rdv-create';

@Injectable({
  providedIn: 'root',
})
export class RendezVousService {
  private readonly http = inject(HttpClient);
 // private readonly url = `${environment.apiUrl}/rendez-vous`;
  private   url =   '/rendez-vous';

  prendre(rdv: RendezVousCreate): Observable<RendezVous> {
    return this.http.post<RendezVous>(`${this.url}/prendre`, rdv);
  }

  annuler(rdvId: number): Observable<void> {
    return this.http.put<void>(`${this.url}/${rdvId}/annuler`, {});
  }

  modifierStatut(rdvId: number, nouvelEtat: string): Observable<RendezVous> {
    const params = new HttpParams().set('nouvelEtat', nouvelEtat);
    return this.http.patch<RendezVous>(`${this.url}/${rdvId}/statut`, null, { params });
  }

  getByPatient(patientId: number): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.url}/patient/${patientId}`);
  }

  getByDentiste(dentisteId: number): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.url}/dentiste/${dentisteId}`);
  }

  getByCabinet(cabinetId: number) {
    return this.http.get(`${this.url}/cabinet/${cabinetId}`);
  }

  deleteRendezVous(rdvId: number) {
    return this.http.delete(`${this.url}/delete/${rdvId}`);
  }
}
