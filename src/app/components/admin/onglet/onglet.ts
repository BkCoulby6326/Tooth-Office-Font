import { Component } from '@angular/core';
import { Cabinets } from '../cabinets/cabinets';
import { Abonnement } from '../abonnement.component/abonnement';
import { GestionUtilisateurs } from '../gestion-utilisateurs/gestion-utilisateurs';

@Component({
  selector: 'app-onglet',
  imports: [
    Cabinets,Abonnement,GestionUtilisateurs
  ],
  templateUrl: './onglet.html',
  styleUrl: './onglet.css',
})
export class Onglet {
  page = 'cabinet';
}
