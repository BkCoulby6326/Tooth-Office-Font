export interface ConsultationCreate {
    diagnostic: string;
    notes: string;

    idDentiste: number;
    idDossierMedical: number;
    idRendezVous: number;
}