export interface RendezVous {
  id?: number;
  dateRdv: string; // LocalDateTime -> ISO string (ex. 2026-06-25T10:00:00)
  motif?: string;
  notes?: string;
  etatRdv?: string;
  typeRdv?: string;
  patientId: number;
  patientNom?: string;
  dentisteId: number;
  dentisteNom?: string;
  creneauId?: number;
}
