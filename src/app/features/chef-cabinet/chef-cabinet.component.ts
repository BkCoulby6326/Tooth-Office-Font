import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chef-cabinet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chef-cabinet.component.html',
  styleUrl: './chef-cabinet.component.css'
})
export class ChefCabinetComponent {}
