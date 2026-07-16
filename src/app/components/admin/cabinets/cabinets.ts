import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Cabinet } from '../../../models/cabinet';
import { CabinetService } from '../../../Services/cabinet-service';
import { MatDialog } from '@angular/material/dialog';
import { ConfimDialog } from '../../dialogs/confim-dialog/confim-dialog';



@Component({
  selector: 'app-cabinets',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,],
  templateUrl: './cabinets.html',
  styleUrl: './cabinets.css',
})
export class Cabinets implements AfterViewInit {
  constructor(private cd: ChangeDetectorRef, private dialog: MatDialog) { }

  private cabinetService = inject(CabinetService);

  displayedColumns: string[] = [
    'cabinet',
    'contact',
    'note',
    'actions'
  ];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.cabinets.paginator = this.paginator;
  }

  cabinets = new MatTableDataSource<Cabinet>([]);
  ngOnInit() {
    this.recupererCabinets();
  }

  private fb = inject(FormBuilder);

  cabinetForm = this.fb.group({

    nomCabinet: [''],

    adresse: [''],

    tel: [''],

    logo: [''],

    description: ['']

  });

  recupererCabinets() {
    this.cabinetService.getAll().subscribe({

      next: (data) => {
        this.cabinets.data = data;
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

    const dialogRef = this.dialog.open(ConfimDialog, {
      data: {
        message: 'Voulez-vous vraiment supprimer ce cabinet ?',
        isDelete: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.cabinetService.delete(id).subscribe(() => {

          console.log("Cabinet supprimé");

          // Recharger la liste
          this.recupererCabinets();

        });

      }

    });

  }
}




