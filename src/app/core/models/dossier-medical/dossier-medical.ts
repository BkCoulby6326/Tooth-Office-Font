export interface DossierMedical {
  id?: number;
  antecedents: string;
  allergies: string;
  historiques: string;
  patientId: number; // Identifiant du patient pour la relation un à un
}