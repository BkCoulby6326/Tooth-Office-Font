
import { StatutCompteEnum } from "../enums/statut-compte-enum";
import { RoleEnum } from '../enums/role-enum';

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  mpd: string;
  adresse: string;
  role: RoleEnum;
  telephone: string;
  statutCompte: StatutCompteEnum;
  createdAt: string;      // LocalDate -> string (YYYY-MM-DD)
  updatedAt: string;      // LocalDateTime -> string (ISO 8601)
  createdBy: string;
  updatedBy: string;
}
