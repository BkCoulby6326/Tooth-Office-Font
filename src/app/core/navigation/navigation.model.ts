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
  /** When omitted, the entry is available to everyone. */
  roles?: UserRole[];
}

/**
 * Single source of truth for the application navigation.
 * Values match the roles emitted by the backend exactly.
 */
export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { label: 'Accueil', route: '/', icon: 'home' },
  { label: 'Mon espace', route: '/patient', icon: 'person', roles: ['PATIENT'] },
  {
    label: 'Gestion du cabinet',
    route: '/cabinet/gestion',
    icon: 'medical_services',
    roles: ['ADMIN_SYSTEM', 'CHEF_CABINET', 'DENTISTE']
  },
  {
    label: 'Administration',
    route: '/admin',
    icon: 'admin_panel_settings',
    roles: ['ADMIN_SYSTEM']
  }
];
