export interface AvisRequest {
  note: number;        // entre 1 et 5
  description: string;
  cabinetId: number;
  patientId: number;
}

// Correspond à AvisDetailDTO (ce que le backend retourne)
export interface AvisDetail {
  id: number;
  note: number;
  description: string;
  createAt: string;    // LocalDateTime → string ISO en Angular
  nomCabinet: string;
  nomPatient: string;
}

// // Correspond à AvisResponseDTO (version simple avec IDs bruts)
// export interface AvisResponse {
//   id: number;
//   note: number;
//   description: string;
//   cabinetId: number;
//   patientId: number;
//   createAt: string;
// }