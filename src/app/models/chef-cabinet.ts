// ---- Modèle de RÉPONSE (ce que le backend retourne) ----
// Correspond à ChefCabinetResponseDTO côté backend

export interface ChefCabinet {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  adresse?: string;
  telephone?: string;
  role: string;
  statutCompte: 'VALIDE' | 'SUSPENDU' | 'SUPPRIMER';
  createdAt?: string;      // LocalDate → string ISO en Angular
  cabinetIds?: number[];   // IDs des cabinets gérés
}

// ---- Modèle de REQUÊTE (ce qu'on envoie pour créer/modifier) ----
// Correspond à ChefCabinetDTO côté backend

export interface ChefCabinetRequest {
  nom: string;
  prenom: string;
  email: string;
  mpd?: string;            // Optionnel lors d'une mise à jour (laisser vide si inchangé)
  adresse?: string;
  telephone?: string;
  statutCompte?: 'VALIDE' | 'SUSPENDU' | 'SUPPRIMER';
  cabinetIds?: number[];   // IDs des cabinets à associer
}
