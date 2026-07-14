import { Component } from '@angular/core';
import { PatientHeader } from '../../../../shared/components/header/patient-header/patient-header';
import { ButttonRetour } from '../../components/buttton-retour/buttton-retour';
import { DetailsCabinet } from '../../components/details-cabinet/details-cabinet';
import { EquipeMedical } from '../../components/equipe-medical/equipe-medical';

@Component({
  selector: 'app-cabinet-detaill',
  standalone: true,
  imports: [PatientHeader, ButttonRetour, DetailsCabinet, EquipeMedical],
  templateUrl: './cabinet-detaill.html',
  styleUrl: './cabinet-detaill.css',
})
export class CabinetDetaill {}
