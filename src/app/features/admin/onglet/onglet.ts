import { Component } from '@angular/core';
import { Cabinets } from '../cabinets/cabinets';
import { Abonnement } from '../abonnement.component/abonnement';

@Component({
  selector: 'app-onglet',
  imports: [
    Cabinets,Abonnement
  ],
  templateUrl: './onglet.html',
  styleUrl: './onglet.css',
})
export class Onglet {
  page = 'cabinet';
}
