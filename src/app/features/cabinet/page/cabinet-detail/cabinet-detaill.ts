import { Component } from '@angular/core';
import { ButttonRetour } from './components/buttton-retour/buttton-retour';
import { AvisSurCabinet } from './components/avis-sur-cabinet/avis-sur-cabinet';
import { DetailsCabinet } from './components/details-cabinet/details-cabinet';
import { EquipeMedical } from './components/equipe-medical/equipe-medical';


@Component({
  selector: 'app-cabinet-detaill',
  standalone: true,
  imports: [ButttonRetour, DetailsCabinet, EquipeMedical, AvisSurCabinet],
  templateUrl: './cabinet-detail.html',
  styleUrl: './cabinet-detail.css',
})
export class CabinetDetaill {}
