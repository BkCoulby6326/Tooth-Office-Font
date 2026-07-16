import { Component } from '@angular/core';
import { Tarif } from "../tarif/tarif";
import { Equip } from '../equip/equip';
import { Forfait } from '../forfait/forfait';

@Component({
  selector: 'app-gestioncabinet',
  imports: [Tarif, Equip, Forfait],
  templateUrl: './gestioncabinet.html',
  styleUrl: './gestioncabinet.css',
})
export class Gestioncabinet {
  activeTab: string = 'tab2';
  
miseajour(tab: string) {
    this.activeTab = tab;
  }


}
