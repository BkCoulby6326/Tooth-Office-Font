export interface PlanAbonnement {
<<<<<<< HEAD
  idPlan?: number;
=======
  idPlan: number;
>>>>>>> a3ee2c2d537652230ad1da5529ed3ca04efcde06
  nom: string;
  prixMensuel: number;
  prixAnnuel: number;
  maxCabinet: number;
  maxDentistes: number;
  maxSecretaires: number;
  description?: string;
  // La relation OneToMany est généralement exclue ou typée séparément 
  // pour éviter les cycles infinis lors de la sérialisation JSON côté client.
  // Si nécessaire, décommentez la ligne ci-dessous et importez l'interface Abonnement.
  // abonnements?: Abonnement[]; 
}   
