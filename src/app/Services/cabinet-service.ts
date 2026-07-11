import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';

import { CabinetDTO, CabinetResponseDTO } from '../models/cabinet';
import { DentisteResponseDTO } from '../models/dentiste';
import { SecretaireResponseDTO } from '../models/secretaire';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/cabinets`;



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



  getDentistes(id: number): Observable<DentisteResponseDTO[]> {
    return this.http.get<DentisteResponseDTO[]>(
      `${this.url}/${id}/dentistes`
    );
  }



  getSecretaires(id: number): Observable<SecretaireResponseDTO[]> {
    return this.http.get<SecretaireResponseDTO[]>(
      `${this.url}/${id}/secretaires`
    );
  }



  getSecretaire(
    idCabinet: number,
    idSecretaire: number
  ): Observable<SecretaireResponseDTO> {
    return this.http.get<SecretaireResponseDTO>(
      `${this.url}/${idCabinet}/secretaires/${idSecretaire}`
    );
  }

  getDentiste(
    idCabinet: number,
    idDentiste: number
  ): Observable<DentisteResponseDTO> {
    return this.http.get<DentisteResponseDTO>(
      `${this.url}/${idCabinet}/dentistes/${idDentiste}`
    );
  }

}
