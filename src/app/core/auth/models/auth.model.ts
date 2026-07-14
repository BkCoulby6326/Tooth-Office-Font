export interface LoginRequest {
  email?: string;
  telephone?: string;
  motDePasse: string;
}

export interface RegisterRequest {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  confirmationMotDePasse: string;
  telephone: string;
  adresse?: string;
  role: 'ADMIN_SYSTEM' | 'CHEF_CABINET' | 'DENTISTE' | 'SECRETAIRE' | 'PATIENT';
}

export interface AuthResponse {
  token: string;
  type: string;
  refreshToken: string;
  id: number;
  email: string;
  nomComplet: string;
  role: string;
}

export interface UserProfile {
  id: number;
  nom?: string;
  prenom?: string;
  email: string;
  role: string;
  statutCompte?: string;
}
