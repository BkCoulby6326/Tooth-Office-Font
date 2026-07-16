// ---- Modèle de RÉPONSE (ce que le backend retourne) ----
// Correspond à PatientResponseDTO côté backend

export interface Patient {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  adresse?: string;
  telephone?: string;
  statutCompte: 'VALIDE' | 'SUSPENDU' | 'SUPPRIMER';
  dateNaissance?: string;  // LocalDate → string ISO en Angular (ex: "1990-03-15")
  createdAt?: string;      // LocalDate → string ISO en Angular
  cabinetIds?: number[];   // IDs des cabinets qui suivent ce patient
}

// ---- Modèle de REQUÊTE (ce qu'on envoie pour créer/modifier) ----
// Correspond à PatientDTO côté backend

export interface PatientRequest {
  nom: string;
  prenom: string;
  email: string;
  mdp?: string;            // Optionnel lors d'une mise à jour (laisser vide si inchangé)
  adresse?: string;
  telephone?: string;
  dateNaissance?: string;  // Format "YYYY-MM-DD"
  statutCompte?: 'VALIDE' | 'SUSPENDU' | 'SUPPRIMER';
  cabinetIds?: number[];   // IDs des cabinets à associer
}
