import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dentiste',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dentiste.component.html',
  styleUrl: './dentiste.component.css'
})
export class DentisteComponent {}
