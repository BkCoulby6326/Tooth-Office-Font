import { Utilisateur } from "./utilisateur";

export interface Dentiste extends Utilisateur {
    specialite: string;
}