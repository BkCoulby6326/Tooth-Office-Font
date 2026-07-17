import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soin } from '../models/soin';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SoinService {

  constructor(private http: HttpClient) {}

  getSoins(): Observable<Soin[]> {
    return this.http.get<Soin[]>(environment.apiUrl);
  }

  createSoin(soin: Soin): Observable<Soin> {
    return this.http.post<Soin>(environment.apiUrl, soin);
  }

  deleteSoin(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${id}`);
  }
}