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

  @Input()
  search = '';

  cabinets: CabinetResponseDTO[] = [];

  ngOnInit(): void {
    
    this.loadCabinets();
    
  }

  ngOnChanges(): void {
     if (this.search==='') {
       this.loadCabinets();
      }else {
        this.searchCabinet();
      }
  }



  

  loadCabinets(): void {

  this.loading = true;
  console.log('Avant la requête :', this.loading);

  this.cabinetService.getAll().subscribe({

    next: (response) => {

      
      this.cabinets = response;
      this.loading = false;
      
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

   searchCabinet(): void {

    this.loading = true;

    this.cabinetService.getByNom(this.search).subscribe({

      next: (cabinet) => {
        
        this.loading = false;
        this.cabinets = [cabinet];
        this.cdr.markForCheck();

      },

      error: () => {

        this.cabinets = [];

        this.loading = false;
        this.cdr.markForCheck();

      }

    });

  }
  
}
