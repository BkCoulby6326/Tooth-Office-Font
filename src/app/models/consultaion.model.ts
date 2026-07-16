export interface Consultation {
    id?: number;
    diagnostic: string;
    notes: string;
    date_consultation?: string;

    patient?: string;
    telPatient?: string;
    dentiste?: string;
}