import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Patient, PatientRequest } from '../models/patient';

/**
 * Service Angular pour gérer les patients.
 *
 * Flux de données :
 *  - En lecture  : le backend retourne des objets Patient (sans mot de passe)
 *  - En écriture : on envoie un PatientRequest (avec mot de passe si création)
 *
 * Tous les appels passent par l'intercepteur HTTP qui ajoute automatiquement
 * le token JWT dans les en-têtes.
 */
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly http = inject(HttpClient);

  // URL de base : correspond à /api/patients côté backend
  private readonly url = `${environment.apiUrl}/patients`;

  // -------------------------------------------------------
  // LECTURE
  // -------------------------------------------------------

  /**
   * Récupère la liste de tous les patients.
   * Accessible à ADMIN_SYSTEM, CHEF_CABINET, SECRETAIRE, DENTISTE.
   */
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url);
  }

  /**
   * Récupère un patient par son identifiant.
   * @param id - L'identifiant du patient
   */
  getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url}/${id}`);
  }

  // -------------------------------------------------------
  // ÉCRITURE
  // -------------------------------------------------------

  /**
   * Crée un nouveau patient.
   * Le champ `mdp` est obligatoire lors de la création.
   * @param dto - Les données du patient à créer
   */
  create(dto: PatientRequest): Observable<Patient> {
    return this.http.post<Patient>(this.url, dto);
  }

  /**
   * Modifie un patient existant.
   * Le champ `mdp` peut être omis si le mot de passe ne change pas.
   * @param id  - L'identifiant du patient à modifier
   * @param dto - Les nouvelles données
   */
  update(id: number, dto: PatientRequest): Observable<Patient> {
    return this.http.put<Patient>(`${this.url}/${id}`, dto);
  }

  /**
   * Supprime un patient par son identifiant.
   * @param id - L'identifiant du patient à supprimer
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
