import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsCabinet } from './components/details-cabinet/details-cabinet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , DetailsCabinet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tooth_office');
}
