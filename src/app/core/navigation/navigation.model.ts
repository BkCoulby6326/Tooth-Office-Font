export type UserRole =
  | 'ADMIN_SYSTEM'
  | 'CHEF_CABINET'
  | 'DENTISTE'
  | 'SECRETAIRE'
  | 'PATIENT';

export interface NavItem {
  label: string;
  route: string;
  icon?: string;
  /**
   * Rôles autorisés à voir ce lien.
   * - Omis → lien public (non-connectés uniquement via la logique guest)
   * - Présent → lien visible uniquement pour ces rôles connectés
   */
  roles?: UserRole[];
}

/**
 * Navigation par rôle — source unique de vérité.
 *
 * ADMIN_SYSTEM  → aucun lien (uniquement logo + déconnexion)
 * SECRETAIRE    → aucun lien (uniquement logo + déconnexion)
 * DENTISTE      → Mon planning, Mon cabinet
 * CHEF_CABINET  → Tableau de bord, Gestion cabinet, Soins & Tarifs
 * PATIENT       → Accueil, Rechercher, Mon espace
 * Non connecté  → Accueil
 */
export const NAVIGATION_ITEMS: readonly NavItem[] = [

  // ── Liens publics / patient ──────────────────────────────────────
  { label: 'Accueil',            route: '/',              icon: 'home',            roles: ['PATIENT'] },

  // ── Dentiste ─────────────────────────────────────────────────────
  { label: 'Mon planning',       route: '/dentiste/planning',  icon: 'calendar_month', roles: ['DENTISTE'] },
  { label: 'Mon cabinet',        route: '/dentiste/cabinet',   icon: 'local_hospital',  roles: ['DENTISTE'] },

  // ── Chef de cabinet ──────────────────────────────────────────────
  { label: 'Tableau de bord',    route: '/chef/dashboard',     icon: 'dashboard',       roles: ['CHEF_CABINET'] },
  { label: 'Gestion cabinet',    route: '/cabinet/gestion',    icon: 'medical_services', roles: ['CHEF_CABINET'] },
  { label: 'Soins & Tarifs',     route: '/cabinet/gestion',    icon: 'payments',         roles: ['CHEF_CABINET'] },

  // ── Profil (global pour tous les utilisateurs connectés) ────────
  { label: 'Profil',             route: '/profil',        icon: 'account_circle',  roles: ['ADMIN_SYSTEM', 'CHEF_CABINET', 'DENTISTE', 'SECRETAIRE', 'PATIENT'] }
];


/** Liste des rôles qui ne doivent afficher AUCUN lien de navigation. */
export const ROLES_WITHOUT_NAV: readonly UserRole[] = ['ADMIN_SYSTEM', 'SECRETAIRE'];

