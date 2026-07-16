import { Component, inject } from '@angular/core';
import { Utilisateur } from '../../../models/utilisateur';
import { UtilisateurService } from '../../../Services/utilisateur';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ConfimDialog } from '../../dialogs/confim-dialog/confim-dialog';

@Component({
  selector: 'app-gestion-utilisateurs',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatTableModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './gestion-utilisateurs.html',
  styleUrl: './gestion-utilisateurs.css',
})
export class GestionUtilisateurs {
    utilisateurs: Utilisateur[] = [];
    private dialog = inject(MatDialog);

    displayedColumns = [
  'utilisateur',
  'role',
  'coordonnees',
  'details',
  'statutCompte',
  'actions'
];

  roleSelectionne = '';

  private UtilisateurService = inject(UtilisateurService);

  ngOnInit(): void {
    this.recuperUser();

   
  }

  get utilisateursFiltres(){

    if(this.roleSelectionne=="")
      return this.utilisateurs;

    return this.utilisateurs.filter(u=>u.role===this.roleSelectionne);

  }

  supprimer(id:number){
    const dialogRef=this.dialog.open(ConfimDialog, {
      
     
      data: { message: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',
         isDelete: true
       },
    });

    

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.UtilisateurService.supprimerUtilisateur(id).subscribe(
          {
            next: () => {
              console.log("Utilisateur supprimé avec succès");
              this.recuperUser();
            },
            error: err => console.log(err)
          }
        );
      }
    }

    );
  }
   
  recuperUser(){
    this.UtilisateurService.getUtilisateurs().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.utilisateurs = data;
        },
         error : err => console.log(err)
      });

  }

}
