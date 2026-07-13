import { Component } from '@angular/core';
import { PatientHeader } from '../../../../shared/components/header/patient-header/patient-header';
import { ButttonRetour } from '../../components/buttton-retour/buttton-retour';

@Component({
  selector: 'app-cabinet-detaill',
  standalone: true,
  imports: [PatientHeader, ButttonRetour],
  templateUrl: './cabinet-detaill.html',
  styleUrl: './cabinet-detaill.css',
})
export class CabinetDetaill {}
