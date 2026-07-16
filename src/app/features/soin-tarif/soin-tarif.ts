import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrestationService } from '../cabinet/cabinet-prestation/prestation';
import { Prestation } from '../../core/models/prestation/Prestation';

@Component({
  selector: 'app-soin-tarif',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './soin-tarif.html',
  styleUrls: ['./soin-tarif.css']
})
export class SoinTarifComponent {

  constructor(
    private prestationService: PrestationService
  ) {}

  // Données du formulaire
  nouveauSoin = {
    nom: '',
    tarif: 0,
    duree: 0
  };

  // Messages
  messageSucces = '';
  messageErreur = '';

  ajouterGrilleTarif(): void {

    // Vérification
    if (!this.nouveauSoin.nom.trim()) {
      this.messageErreur = "Le nom de la prestation est obligatoire.";
      this.messageSucces = "";
      return;
    }

    // Objet envoyé au backend
    const prestation: Prestation = {
  nom_prestation: this.nouveauSoin.nom
};

    console.log("Prestation envoyée :", prestation);

    this.prestationService.create(prestation).subscribe({

      next: (response) => {

        console.log("Réponse :", response);

        this.messageSucces =
          "Prestation ajoutée à la grille des tarifs avec succès.";

        this.messageErreur = "";

        // Réinitialisation
        this.nouveauSoin = {
          nom: '',
          tarif: 0,
          duree: 0
        };

      },

      error: (error) => {

        console.error("Erreur :", error);

        this.messageSucces = "";

        this.messageErreur =
          "Impossible d'ajouter la prestation.";

      }

    });

  }

}
