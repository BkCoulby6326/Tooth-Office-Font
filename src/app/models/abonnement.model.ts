import { EtatAbonnement } from "../enums/etat-abonnement.enum";
<<<<<<< HEAD
import { TypePaiement } from '../enums/type-paiement';
=======
import { TypePaiement } from "../enums/type-paiement";
>>>>>>> a3ee2c2d537652230ad1da5529ed3ca04efcde06


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
