import { Component, OnChanges, SimpleChanges, input, Input, inject, ChangeDetectorRef } from '@angular/core';

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
export class AvisCabinet implements OnChanges {
  private avisService = inject(AvisService);
  private cdr = inject(ChangeDetectorRef);
  @Input() cabinetId!: number;

  avis: AvisDetail[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cabinetId'] && this.cabinetId) {
      this.chargerAvis();
    }
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
