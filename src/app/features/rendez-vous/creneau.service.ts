import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Creneau } from '../../core/models/creneau/creneau';

@Service()
export class CreneauService {
  // private readonly http = inject(HttpClient);
  // private readonly url = `${environment.apiUrl}/creneaux`;

  // create(dto: Creneau): Observable<Creneau> {
  //   return this.http.post<Creneau>(this.url, dto);
  // }

  // getAll(): Observable<Creneau[]> {
  //   return this.http.get<Creneau[]>(this.url);
  // }

  // getById(id: number): Observable<Creneau> {
  //   return this.http.get<Creneau>(`${this.url}/${id}`);
  // }

  // update(id: number, dto: Creneau): Observable<Creneau> {
  //   return this.http.put<Creneau>(`${this.url}/${id}`, dto);
  // }

  // delete(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.url}/${id}`);
  // }

  // generer(date: string, dentisteId: number): Observable<Creneau[]> {
  //   const params = new HttpParams()
  //     .set('date', date)
  //     .set('dentisteId', dentisteId.toString());

  //   return this.http.post<Creneau[]>(`${this.url}/generer`, null, { params });
  // }

  // getDisponiblesByDentiste(dentisteId: number): Observable<Creneau[]> {
  //   return this.http.get<Creneau[]>(`${this.url}/disponibles/dentiste/${dentisteId}`);
  // }

  // bloquer(idCreneau: number): Observable<void> {
  //   return this.http.put<void>(`${this.url}/${idCreneau}/bloquer`, {});
  // }

  // liberer(idCreneau: number): Observable<void> {
  //   return this.http.put<void>(`${this.url}/${idCreneau}/liberer`, {});
  // }
}
