import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient);

  private url = environment.apiUrl + '/dashboard';

  getStatistiques(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.url);
  }

}