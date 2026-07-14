import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ChefCabinet, ChefCabinetRequest } from '../models/chef-cabinet';

/**
 * Service Angular pour gérer les chefs de cabinet.
 *
 * Flux de données :
 *  - En lecture  : le backend retourne des objets ChefCabinet (sans mot de passe)
 *  - En écriture : on envoie un ChefCabinetRequest (avec mot de passe si création)
 *
 * Tous les appels passent par l'intercepteur HTTP qui ajoute automatiquement
 * le token JWT dans les en-têtes.
 */
@Injectable({
  providedIn: 'root',
})
export class ChefCabinetService {
  private readonly http = inject(HttpClient);

  // URL de base : correspond à /api/chefs-cabinet côté backend
  private readonly url = `${environment.apiUrl}/chefs-cabinet`;

  // -------------------------------------------------------
  // LECTURE
  // -------------------------------------------------------

  /**
   * Récupère la liste de tous les chefs de cabinet.
   * Accessible à ADMIN_SYSTEM et CHEF_CABINET.
   */
  getAll(): Observable<ChefCabinet[]> {
    return this.http.get<ChefCabinet[]>(this.url);
  }

  /**
   * Récupère un chef de cabinet par son identifiant.
   * @param id - L'identifiant du chef de cabinet
   */
  getById(id: number): Observable<ChefCabinet> {
    return this.http.get<ChefCabinet>(`${this.url}/${id}`);
  }

  // -------------------------------------------------------
  // ÉCRITURE
  // -------------------------------------------------------

  /**
   * Crée un nouveau chef de cabinet.
   * Le champ `mdp` est obligatoire lors de la création.
   * @param dto - Les données du chef de cabinet à créer
   */
  create(dto: ChefCabinetRequest): Observable<ChefCabinet> {
    return this.http.post<ChefCabinet>(this.url, dto);
  }

  /**
   * Modifie un chef de cabinet existant.
   * Le champ `mdp` peut être omis si le mot de passe ne change pas.
   * @param id  - L'identifiant du chef de cabinet à modifier
   * @param dto - Les nouvelles données
   */
  update(id: number, dto: ChefCabinetRequest): Observable<ChefCabinet> {
    return this.http.put<ChefCabinet>(`${this.url}/${id}`, dto);
  }

  /**
   * Supprime un chef de cabinet par son identifiant.
   * @param id - L'identifiant du chef de cabinet à supprimer
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
