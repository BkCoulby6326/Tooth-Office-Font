import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Cabinet } from '../../../models/cabinet';
import { CabinetService } from '../../../Services/cabinet-service';



@Component({
  selector: 'app-cabinets',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule],
  templateUrl: './cabinets.html',
  styleUrl: './cabinets.css',
})
export class Cabinets {
  constructor(private cd: ChangeDetectorRef) { }

  private cabinetService = inject(CabinetService);

  displayedColumns: string[] = [
    'cabinet',
    'contact',
    'note',
    'actions'
  ];

  cabinets: Cabinet[] = [];
  ngOnInit() {
    this.recupererCabinets();
  }

  // cabinets = [
  //   {
  //     id: 1,
  //     nom: 'Cabinet Dental Plus',
  //     contact: '+223 70 00 00 01',
  //     note: 4.8
  //   },
  //   {
  //     id: 2,
  //     nom: 'Smile Care',
  //     contact: '+223 70 00 00 02',
  //     note: 4.5
  //   },
  //   {
  //     id: 3,
  //     nom: 'Tooth Office',
  //     contact: '+223 70 00 00 03',
  //     note: 5
  //   }
  // ];

  private fb = inject(FormBuilder);

  cabinetForm = this.fb.group({

    nomCabinet:[''],

    adresse:[''],

    tel:[''],

    logo:[''],

    description:['']

  });

  recupererCabinets() {
    this.cabinetService.getAll().subscribe({

      next: (data) => {

        this.cabinets = data;
        this.cd.detectChanges();
        //confirm('Cabinets récupérés avec succès !');
        console.log(data);

      },

      error: err => console.log(err)

    });
  }

   enregistrer() {
      if (this.cabinetForm.invalid) return;
  
    this.cabinetService.create(this.cabinetForm.value as Cabinet)
      .subscribe({
  
        next: () => {
  
          this.recupererCabinets();
  
          this.cabinetForm.reset();
  
        },
  
        error: err => console.log(err)
  
      });
    }
  
    supprimer(id: number) {
  
    // if (!confirm('Supprimer ce cabinet ?')) return;
  
    // this.cabinetService.delete(id).subscribe({
  
    //   next: () => {
  
    //     this.loadCabinets();
  
    //   }
  
    // });
    }

}
