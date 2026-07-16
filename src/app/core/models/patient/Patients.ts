import { Utilisateur } from "../utilisateur";

export interface Patient extends Utilisateur {
    dateNaissance: string; // LocalDate -> string
}
