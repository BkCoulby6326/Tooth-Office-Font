
export interface PlanAbonnement {
  idPlan: number;
  nom: string;
  prixMensuel: number;
  prixAnnuel: number;
  maxCabinet: number;
  maxDentistes: number;
  maxSecretaires: number;
  description: string;
}