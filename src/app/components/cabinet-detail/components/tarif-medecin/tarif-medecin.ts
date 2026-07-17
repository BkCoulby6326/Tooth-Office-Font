import { Component, inject, OnInit } from '@angular/core';
import { SoinService } from '../../../../Services/soin.service'; // Chemin vers votre service
import { Soin } from '../../../../models/soin'; // Chemin vers votre modèle
import { CommonModule } from '@angular/common'; // Pour le pipe | number

@Component({
  selector: 'app-tarif-medecin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarif-medecin.html',
  styleUrl: './tarif-medecin.css',
})
export class TarifMedecin implements OnInit {
  private readonly soinService = inject(SoinService);

  soins: Soin[] = [];
  isLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    // Appel au service pour remplir la propriété 'soins'
    this.soinService.getSoins().subscribe({
      next: (data) => {
        this.soins = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Erreur de chargement';
        this.isLoading = false;
      }
    });
  }
}   