import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabinetService } from '../../../../Services/cabinet-service';
import { CabinetResponseDTO } from '../../../../models/cabinet-response-dto';

@Component({
  selector: 'app-details-cabinet',
  standalone: true,
  imports: [], // CommonModule n'est plus nécessaire avec la syntaxe @if/@else
  templateUrl: './details-cabinet.html',
  styleUrl: './details-cabinet.css',
  // Optimisation de la performance : ne détecte les changements que si les données changent
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class DetailsCabinet implements OnInit {
  
  private readonly route = inject(ActivatedRoute);
  private readonly cabinetService = inject(CabinetService);

  cabinet: CabinetResponseDTO | null = null;
  isLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = +idParam;

      this.cabinetService.getById(id).subscribe({
        next: (data) => {
          this.cabinet = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Impossible de charger les détails du cabinet.';
          this.isLoading = false;
          console.error('Erreur chargement', err);
        }
      });
    } else {
      this.error = 'Aucun ID spécifié.';
      this.isLoading = false;
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = '/assets/images/imageCabinet.png';
  }
}   