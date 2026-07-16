export interface Creneau {
  idCreneau?: number;
  date: string; // LocalDate -> ISO string (ex. 2026-06-25)
  heureDebut: string; // LocalTime -> ISO string (ex. 09:00:00)
  heureFin: string; // LocalTime -> ISO string (ex. 09:30:00)
  disponible: boolean;
  dentisteId: number;
  dentisteNom?: string;
}
