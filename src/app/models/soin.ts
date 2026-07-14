export interface Soin {
  id?: number;
  typeSoin: string;       // ex: 'Consultation dentaire standar'
  tarifClinique: number;   // Tarif en FCFA
  duree: number;          // Durée en minutes
}