import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { CabinetDTO } from '../../../models/cabinet-dto';
import { CabinetCard } from '../cabinet-card/cabinet-card';
import { CabinetService } from '../../../Services/cabinet-service';
import { CabinetResponseDTO } from '../../../models/cabinet-response-dto';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cabinet-list',
  standalone: true,
  imports: [
    CommonModule,
    CabinetCard,
    MatProgressSpinnerModule
  ],
  templateUrl: './cabinet-list.html',
  styleUrl: './cabinet-list.css',
})
export class CabinetList implements OnInit {
  private cabinetService = inject(CabinetService);
  private cdr = inject(ChangeDetectorRef);

  imageUrl = '/assets/images/imageCabinet.png';

  loading = false;

  private allCabinets: CabinetResponseDTO[] = [];
  private searchTerm = '';

  @Input()
  set search(value: string) {
    this.searchTerm = value;
    this.filterCabinets();
  }

  cabinets: CabinetResponseDTO[] = [];

  ngOnInit(): void {
    
    this.loadCabinets();
    
  }

  loadCabinets(): void {

  this.loading = true;
  console.log('Avant la requête :', this.loading);

  this.cabinetService.getAll().subscribe({

    next: (response) => {

      
      this.allCabinets = response;
      this.loading = false;
      this.filterCabinets();
      
      console.log('Réponse reçue', response);
      console.log('Après la requête :', this.loading);

      this.cdr.markForCheck();
      

    },

    error: (err) => {

      console.error(err);

      
      this.loading = false;

      this.cdr.markForCheck();
    }

  });

}

  private filterCabinets(): void {
    const term = this.normalize(this.searchTerm);

    this.cabinets = term
      ? this.allCabinets.filter((cabinet) =>
          [cabinet.nomCabinet, cabinet.adresse, cabinet.description, cabinet.tel]
            .some((value) => this.normalize(value).includes(term))
        )
      : this.allCabinets;

    this.cdr.markForCheck();
  }

  private normalize(value: string | null | undefined): string {
    return (value ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
