import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-cabinet-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cabinet-list.html',
  styleUrl: './cabinet-list.css',
})
export class CabinetList {
   @Input({required:true})
  cabinet!:Cabinet;
}
