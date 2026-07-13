export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  role: string;

  // Informations supplémentaires
  dateNaissance?: string;
  assurance?: string;
  specialite?: string;
  cabinetId?: number;
  cabinetNom?: string;
}