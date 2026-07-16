import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CabinetResponseDTO } from '../../../../core/models/cabinet/cabinet-response-dto';


@Component({
  selector: 'app-cabinet-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cabinet-card.html',
  styleUrl: './cabinet-card.css',
})
export class CabinetCard {
  @Input({ required: true })
  cabinet!: CabinetResponseDTO;

  @Input()
  imageUrl = '';

  protected readonly stars = [1, 2, 3, 4, 5];

  protected filledStars(note: number | undefined): number {
    return Math.round(note ?? 0);
  }
}
