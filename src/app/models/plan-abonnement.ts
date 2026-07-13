<<<<<<< HEAD
export interface PlanAbonnement {
  idPlan?: number;
=======

export interface PlanAbonnement {
>>>>>>> 5f3b1d86ef9121aa6bc0ae86899d2a1aa95769f9
  nom: string;
  prixMensuel: number;
  prixAnnuel: number;
  maxCabinet: number;
  maxDentistes: number;
  maxSecretaires: number;
<<<<<<< HEAD
  description?: string;
  // La relation OneToMany est généralement exclue ou typée séparément 
  // pour éviter les cycles infinis lors de la sérialisation JSON côté client.
  // Si nécessaire, décommentez la ligne ci-dessous et importez l'interface Abonnement.
  // abonnements?: Abonnement[]; 
}   
=======
  description: string;
}
>>>>>>> 5f3b1d86ef9121aa6bc0ae86899d2a1aa95769f9
