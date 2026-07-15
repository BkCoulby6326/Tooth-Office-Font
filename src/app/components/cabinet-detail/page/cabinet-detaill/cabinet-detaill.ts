import { Component } from '@angular/core';
import { PatientHeader } from '../../../../shared/components/header/patient-header/patient-header';
import { ButttonRetour } from '../../components/buttton-retour/buttton-retour';
import { DetailsCabinet } from '../../components/details-cabinet/details-cabinet';
import { EquipeMedical } from '../../components/equipe-medical/equipe-medical';
import { AvisCabinet } from '../../components/avis-sur-cabinet/avis-sur-cabinet';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-cabinet-detaill',
  standalone: true,
  imports: [PatientHeader, ButttonRetour, DetailsCabinet, EquipeMedical, AvisCabinet],
  templateUrl: './cabinet-detaill.html',
  styleUrl: './cabinet-detaill.css',
})
export class CabinetDetaill {}
