import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientHeader } from './shared/components/header/patient-header/patient-header';
import { PublicHeader } from './shared/components/header/public-header/public-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tooth_office');
}
