import { Cabinet } from "./CabinetModel";
import { Prestation } from "./PrestationModel";

export interface CabinetPrestationModel {
    id?: number;
    prix: number;
    description: string;
    cabinet: Cabinet;
    prestation: Prestation;
}