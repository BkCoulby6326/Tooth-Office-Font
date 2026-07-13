import { EtatAbonnement } from "../enums/etat-abonnement.enum";
import { TypePaiement } from "../enums/type-paiement.enum";

export interface Abonnement {
  idAbonnement?: number;

  dateDebut: string;
  dateFin: string;

  etatAbonnement: EtatAbonnement;
  typePaiement: TypePaiement;

  montantTotal: number;

  idPlan: number;
  idCabinet: number;
}