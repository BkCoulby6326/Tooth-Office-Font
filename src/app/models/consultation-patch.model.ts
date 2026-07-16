export interface ConsultationPatch {
    diagnostic?: string;
    notes?: string;

    idDentiste?: number;
    idDossierMedical?: number;
    idRendezVous?: number;
}