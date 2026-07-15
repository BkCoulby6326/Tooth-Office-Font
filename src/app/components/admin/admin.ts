import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import { Onglet } from './onglet/onglet';
import { Card } from './card/card';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [Onglet,CommonModule,Card
],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  
}
