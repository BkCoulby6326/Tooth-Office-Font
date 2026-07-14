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

//Injection de dependances
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/cabinets`;


//Ajouter un nouveau cabinet
  create(dto: CabinetDTO): Observable<CabinetResponseDTO> {
    return this.http.post<CabinetResponseDTO>(this.url, dto);
  }


//Obtenir tous les cabinets
  getAll(): Observable<CabinetResponseDTO[]> {
    return this.http.get<CabinetResponseDTO[]>(this.url);
  }


//Rechercher un cabinet
  getById(id: number): Observable<CabinetResponseDTO> {
    return this.http.get<CabinetResponseDTO>(`${this.url}/${id}`);
  }


//Rechercher un cabinet par son nom
  getByNom(nom: string): Observable<CabinetResponseDTO> {
    return this.http.get<CabinetResponseDTO>(
      `${this.url}/recherche?nom=${encodeURIComponent(nom)}`
    );
  }


//Mettre à jour un cabinet
  update(id: number, dto: CabinetDTO): Observable<CabinetResponseDTO> {
    return this.http.put<CabinetResponseDTO>(`${this.url}/${id}`, dto);
  }


//Supprimer un cabinet
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }


//Les dentistes d'un cabinet
  getDentistes(id: number): Observable<DentisteResponseDTO[]> {
    return this.http.get<DentisteResponseDTO[]>(
      `${this.url}/${id}/dentistes`
    );
  }


//Les secretaires d'un cabinet
  getSecretaires(id: number): Observable<SecretaireResponseDTO[]> {
    return this.http.get<SecretaireResponseDTO[]>(
      `${this.url}/${id}/secretaires`
    );
  }


//Un secretaire d'un cabinet
  getSecretaire(
    idCabinet: number,
    idSecretaire: number
  ): Observable<SecretaireResponseDTO> {
    return this.http.get<SecretaireResponseDTO>(
      `${this.url}/${idCabinet}/secretaires/${idSecretaire}`
    );
  }


//Un dentiste d'un cabinet
  getDentiste(
    idCabinet: number,
    idDentiste: number
  ): Observable<DentisteResponseDTO> {
    return this.http.get<DentisteResponseDTO>(
      `${this.url}/${idCabinet}/dentistes/${idDentiste}`
    );
  }

//Les avis sur un cabinet
getAvisByCabinet(idCabinet:number): Observable<AvisResponseDto[]> {

    return this.http.get<AvisResponseDto[]>(
      `${this.apiUrl}/${idCabinet}/avis`
    );

  }


//Un avis sur un cabinet
  getAvisById(
    idCabinet:number,
    idAvis:number
  ):Observable<AvisResponseDto>{

    return this.http.get<AvisResponseDto>(
      `${this.apiUrl}/${idCabinet}/avis/${idAvis}`
    );

  }

}
