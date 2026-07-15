import { CabinetPrestationModel } from "./CabinetPrestation";

export interface Prestation {
    id?: number;
    nomPrestation: string;
    dateCreation: string; // ou Date selon ton API
    cabinetPrestations?: CabinetPrestationModel[];
}