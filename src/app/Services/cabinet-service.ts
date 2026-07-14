import { Injectable, inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';
import { CabinetDTO } from '../models/cabinet-dto';
import { CabinetResponseDTO } from '../models/cabinet-response-dto';



@Service()
export class CabinetService {
    private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}api/cabinets`;



  create(dto: CabinetDTO): Observable<CabinetResponseDTO> {
    return this.http.post<CabinetResponseDTO>(this.url, dto);
  }



  getAll(): Observable<CabinetResponseDTO[]> {
    return this.http.get<CabinetResponseDTO[]>(this.url);
  }



  getById(id: number): Observable<CabinetResponseDTO> {
    return this.http.get<CabinetResponseDTO>(`${this.url}/${id}`);
  }



  getByNom(nom: string): Observable<CabinetResponseDTO> {
    return this.http.get<CabinetResponseDTO>(
      `${this.url}/recherche?nom=${encodeURIComponent(nom)}`
    );
  }



  update(id: number, dto: CabinetDTO): Observable<CabinetResponseDTO> {
    return this.http.put<CabinetResponseDTO>(`${this.url}/${id}`, dto);
  }



  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }








}
