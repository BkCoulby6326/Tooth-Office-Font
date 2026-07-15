import { Component, OnInit, inject, input, ChangeDetectorRef } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';



import { AvisService } from '../../../../Services/avis-service';
import { AvisDetail } from '../../../../models/avis';

@Component({
  selector: 'app-avis-sur-cabinet',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatIconModule, DatePipe, DecimalPipe],
  templateUrl: './avis-sur-cabinet.html',
  styleUrl: './avis-sur-cabinet.css',
})
export class AvisCabinet implements OnInit {
  private avisService = inject(AvisService);
  private cdr = inject(ChangeDetectorRef);
  cabinetId: number = 1;

  avis: AvisDetail[] = [];

  ngOnInit(): void {
    this.chargerAvis();
  }

  chargerAvis(): void {
    this.avisService.getByCabinet(this.cabinetId).subscribe({
      next: (data) => {
        this.avis = data;
        this.cdr.detectChanges();

      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  get noteMoyenne(): number {
    if (this.avis.length === 0) {
      return 0;
    }

    const somme = this.avis.reduce(
      (total, avis) => total + avis.note,

      0,
    );

    return somme / this.avis.length;
  }

  getStars(note: number): boolean[] {
    return Array.from(
      { length: 5 },

      (_, index) => index < Math.round(note),
    );
  }
}
