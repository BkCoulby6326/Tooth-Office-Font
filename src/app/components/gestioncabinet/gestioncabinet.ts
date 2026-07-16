import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Tarif } from "../tarif/tarif";
import { Equip } from '../equip/equip';
import { Forfait } from '../forfait/forfait';

@Component({
  selector: 'app-gestioncabinet',
  imports: [Tarif, Equip, Forfait],
  templateUrl: './gestioncabinet.html',
  styleUrl: './gestioncabinet.css',
})

export class Gestioncabinet implements  AfterViewInit{
  activeTab: string = 'tab2';
  @ViewChild('tab1') boutton1!: ElementRef<HTMLButtonElement>;
  @ViewChild('tab2') boutton2!: ElementRef<HTMLButtonElement>;
  @ViewChild('tab3') boutton3!: ElementRef<HTMLButtonElement>;

  @ViewChild('div1') boutton4!: ElementRef<HTMLDivElement>;
  @ViewChild('div2') boutton5!: ElementRef<HTMLDivElement>;
  @ViewChild('div3') boutton6!: ElementRef<HTMLDivElement>;


  ngAfterViewInit(): void {
    this.miseajour(this.activeTab);

  }
miseajour(tab: string) {
    this.activeTab = tab;
    this.changerCouleur(tab);
  }
  changerCouleur(tab:string){
    if (tab=="tab1"){
      this.boutton4.nativeElement.style.backgroundColor="#7008E7";
      this.boutton1.nativeElement.style.color="#ffffff";
      
    }else{
            this.boutton4.nativeElement.style.backgroundColor="transparent";
            this.boutton1.nativeElement.style.color="#8C8C8C";

    }
    if (tab=="tab2"){
      this.boutton5.nativeElement.style.backgroundColor="#7008E7";
      this.boutton2.nativeElement.style.color="#ffffff";
      
    }else{
            this.boutton5.nativeElement.style.backgroundColor="transparent";
            this.boutton2.nativeElement.style.color="#8C8C8C";

    }
    if (tab=="tab3"){
      this.boutton6.nativeElement.style.backgroundColor="#7008E7";
      this.boutton3.nativeElement.style.color="#ffffff";
      
    }else{
            this.boutton6.nativeElement.style.backgroundColor="transparent";
            this.boutton3.nativeElement.style.color="#8C8C8C";

    }
  }
}
