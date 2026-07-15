import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-secretaire-header',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './secretaire-header.html',
  styleUrl: './secretaire-header.css',
})
export class SecretaireHeader {
  @Input() 
  SecretaireName: string = '';
}
