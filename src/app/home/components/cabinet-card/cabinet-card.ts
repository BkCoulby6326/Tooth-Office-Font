import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CabinetResponseDTO } from '../../../models/cabinet-response-dto';


@Component({
  selector: 'app-cabinet-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './cabinet-card.html',
  styleUrl: './cabinet-card.css',
})
export class CabinetCard {
  @Input({ required: true })
  cabinet!: CabinetResponseDTO;
  cabinetId: number | null = 1;

  @Input()
  imageUrl = '';
}
