
export class GestionUtilisateurs {}
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Utilisateur } from '../../../models/utilisateur';
import { UtilisateurService } from '../../../Services/utilisateur';

@Component({
  selector: 'app-gestion-utilisateurs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-utilisateurs.html',
  styleUrls: ['./gestion-utilisateurs.css']
})
export class GestionUtilisateursComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];

  roleSelectionne = '';

  private UtilisateurService = inject(UtilisateurService);

  ngOnInit(): void {
    this.recuperUser();

   
  }

  get utilisateursFiltres(){

    if(this.roleSelectionne=="")
      return this.utilisateurs;

    return this.utilisateurs.filter(u=>u.role===this.roleSelectionne);

  }

  supprimer(id:number){

    if(confirm("Supprimer cet utilisateur ?")){

      this.utilisateurs=this.utilisateurs.filter(u=>u.id!==id);

    }

  }
   
  recuperUser(){
    this.UtilisateurService.getUtilisateurs().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.utilisateurs = data;
        },
         error : err => console.log(err)
      });

  }

}