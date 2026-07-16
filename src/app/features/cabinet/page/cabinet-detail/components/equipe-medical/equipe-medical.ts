import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Imports Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Dentiste } from '../../../../../../core/models/dentiste/Dentiste';
import { UtilisateurService } from '../../../../../admin/utilisateur';


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
export class EquipeMedical implements OnChanges {
  private utilisateurService = inject(UtilisateurService);
  private cdr = inject(ChangeDetectorRef);

  @Input() cabinetId!: number;

  dentistes: Dentiste[] = [];
  dentistesFiltres: Dentiste[] = [];
  rechercheNom: string = '';
  specialiteSelectionnee: string = '';
  specialites: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cabinetId'] && this.cabinetId) {
      this.chargerMedecins();
    }
  }


  chargerMedecins(): void {
    this.utilisateurService.getDentistesParCabinet(this.cabinetId).subscribe({
      next: (donneesRecues:any) => {
        console.log('Vrais dentistes reçus du serveur :', donneesRecues);

        this.dentistes = donneesRecues;
        this.dentistesFiltres = [...this.dentistes];

        const toutesSpecs = this.dentistes.map((d) => d.specialite).filter((s) => !!s);
        this.specialites = Array.from(new Set(toutesSpecs));

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des vrais praticiens :', err);
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