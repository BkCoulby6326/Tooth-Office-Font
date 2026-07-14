import { RoleEnum } from "./RoleEnum";
import { StatutCompte } from "./StatutCompte";

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  mpd: string;
  adresse: string;
  role: RoleEnum;
  telephone: string;
  statutCompte: StatutCompte;
  createdAt: string;      // LocalDate -> string (YYYY-MM-DD)
  updatedAt: string;      // LocalDateTime -> string (ISO 8601)
  createdBy: string;
  updatedBy: string;
}