import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { Dentiste } from '../../../../models/Dentiste';
import { RoleEnum } from '../../../../models/RoleEnum';
import { UtilisateurService } from '../../../../Services/utilisateur';

@Component({
  selector: 'app-equipe-medical',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './equipe-medical.html',
  styleUrl: './equipe-medical.css',
})
export class EquipeMedical implements OnInit {
  dentistes: Dentiste[] = [];
  dentistesFiltres: Dentiste[] = [];
  rechercheNom: string = '';
  specialiteSelectionnee: string = '';
  specialites: string[] = [];

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.chargerMedecins();
  }

  chargerMedecins(): void {
    this.utilisateurService.getUtilisateurs().subscribe({
      next: (utilisateurs) => {
        this.dentistes = utilisateurs.filter((u) => u.role === RoleEnum.DENTISTE) as Dentiste[];

        this.dentistesFiltres = [...this.dentistes];

        // Extraire dynamiquement les spécialités uniques pour remplir le menu déroulant
        const toutesSpecs = this.dentistes.map((d) => d.specialite).filter((s) => !!s);
        this.specialites = Array.from(new Set(toutesSpecs));
      },
      error: (err) => {
        console.error('Erreur lors du chargement des praticiens', err);
      },
    });
  }

  appliquerFiltres(): void {
    this.dentistesFiltres = this.dentistes.filter((dentiste: Dentiste) => {
      const correspondNom = `${dentiste.prenom} ${dentiste.nom}`
        .toLowerCase()
        .includes(this.rechercheNom.toLowerCase());

      const correspondSpecialite =
        this.specialiteSelectionnee === '' || dentiste.specialite === this.specialiteSelectionnee;

      return correspondNom && correspondSpecialite;
    });
  }

  protected getInitials(prenom: string, nom: string): string {
    const p = prenom ? prenom.charAt(0).toUpperCase() : '';
    const n = nom ? nom.charAt(0).toUpperCase() : '';
    return `${p}${n}`;
  }
}
