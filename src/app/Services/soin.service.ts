import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soin } from '../models/soin';

@Injectable({
  providedIn: 'root'
})
export class SoinService {
  private apiUrl = 'http://localhost:8080/api/soins';

  constructor(private http: HttpClient) {}

  getSoins(): Observable<Soin[]> {
    return this.http.get<Soin[]>(this.apiUrl);
  }

  createSoin(soin: Soin): Observable<Soin> {
    return this.http.post<Soin>(this.apiUrl, soin);
  }

  deleteSoin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}