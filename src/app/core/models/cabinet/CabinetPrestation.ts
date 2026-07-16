import { Cabinet } from "./CabinetModel";
import { Prestation } from "../prestation/PrestationModel";

export interface CabinetPrestationModel {
    id?: number;
    prix: number;
    description: string;
    cabinet: Cabinet;
    prestation: Prestation;
}
