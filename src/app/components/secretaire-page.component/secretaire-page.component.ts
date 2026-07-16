import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RendezVousService } from '../../Services/rendez-vous';
import { CabinetPrestation } from '../../Services/cabinetPrestation/cabinet-prestation';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RendezVousCreate } from '../../models/rdv-create';
import { TypeRdv } from '../../models/TypeRDV';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfimDialog } from '../dialogs/confim-dialog/confim-dialog';
import { SnackbarService } from '../../Services/snackbarService/snackbar-service';
import { AuthService } from '../../core/auth/services/auth.service';
import { UserProfile } from '../../core/auth/models/auth.model';





@Component({
  selector: 'app-secretaire-page.component',
  imports: [FormsModule, DatePipe, MatProgressSpinnerModule,


  ],
  templateUrl: './secretaire-page.component.html',
  styleUrl: './secretaire-page.component.css',
})
export class SecretairePageComponent implements OnInit {

  dentistes: any[] = [];
  prestations: any[] = [];
  rdvList: any[] = [];
  patientList: any[] = [];
  loading: boolean = false;
  user?: UserProfile;

  patientRecherche = '';

  patientSelectionne: any = null;

  patientsFiltres: any[] = [];


  constructor(
    private rdvService: RendezVousService,
    private cabinetPrestationService: CabinetPrestation,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private authService: AuthService,

  ) {

  }

  ngOnInit(): void {
    this.loading = true;

    this.authService.getProfile().subscribe({
      next: (user) => {
        this.user = user;


        this.getDentistes();
        this.getPrestationsByCabinet();
        this.getRendezVousByCabinet();
        this.getPatients();
      },

      error: () => {
        this.snackbarService.error("Impossible de récupérer les informations utilisateur");
        this.loading = false;
      }
    });
  }



  nouveauRdv: RendezVousCreate = {

    dateRdv: '',

    notes: '',

    typeRdv: TypeRdv.SURPLACE,

    patientId: null,

    dentisteId: null,

    creneauId: null

  };




  filtrerPatients() {

    const valeur = this.patientRecherche.trim().toLowerCase();

    if (!valeur) {
      this.patientsFiltres = [];
      return;
    }

    this.patientsFiltres = this.patientList.filter(patient =>

      patient.nom.toLowerCase().includes(valeur) ||

      patient.prenom.toLowerCase().includes(valeur) ||

      patient.telephone.replace(/\s/g, '').includes(
        valeur.replace(/\s/g, '')
      )

    );

  }
  selectionnerPatient(patient: any) {


    this.patientSelectionne = patient;


    this.nouveauRdv.patientId = patient.id_utilisateur;


    this.patientRecherche =
      `${patient.prenom} ${patient.nom}`;


    this.patientsFiltres = [];


  }

  disabledSaveButton(): boolean {
    return !this.nouveauRdv.patientId || !this.nouveauRdv.dentisteId || !this.nouveauRdv.dateRdv || !this.nouveauRdv.notes;
  }

  enregistrerRdv() {
    if (!this.nouveauRdv.patientId) {

      this.snackbarService.error("Veuillez sélectionner un patient");
      return;
    }

    if (!this.nouveauRdv.dentisteId) {

      this.snackbarService.error("Veuillez sélectionner un dentiste");

      return;

    }

    if (!this.nouveauRdv.dateRdv) {

      this.snackbarService.error("Veuillez choisir la date du rendez-vous");

      return;

    }

    console.log("donnees a enregistrer: ", this.nouveauRdv);


    this.rdvService.prendre(this.nouveauRdv)

      .subscribe({
        next: (response: any) => {
          this.loading = false; // Stop loading
          console.log("RDV enregistré :", response);
          this.snackbarService.success("Rendez-vous enregistré avec succès");
          this.getRendezVousByCabinet();
          this.resetForm();
        },


        error: (err) => {

          console.error("Erreur création RDV", err);
          this.snackbarService.error("Erreur lors de l'enregistrement");

        }

      });


  }

  resetForm() {


    this.nouveauRdv = {


      dateRdv: '',


      notes: '',


      typeRdv: 'CONSULTATION',


      patientId: null,


      dentisteId: null,


      creneauId: null


    };



    this.patientRecherche = '';


    this.patientSelectionne = null;


  }




  getDentistes() {

    if (!this.user) {
      return;
    }
    console.log("recuperer les dentistes");
    this.cabinetPrestationService.getDentisteCabinet(this.user.id).subscribe(
      (response: any) => {
        console.log("dentistes ", response);
        this.dentistes = response;
        console.log("dentistes ", response);

      },
      (error: any) => {
        this.snackbarService.error("Vérifier votre connexion");
        console.error('Erreur lors de la récupération des dentistes:', error);
      }
    );
  }

  getPrestationsByCabinet() {


    if (!this.user) {
      return;
    }
    this.cabinetPrestationService.getByCabinet(this.user.id).subscribe(
      (response: any) => {
        if (response.statut === 'OK') {
          this.prestations = response.data;
          this.cd.detectChanges();

        }
        if (response.statut === 'KO') this.snackbarService.error(response.message);
      },
      (error: any) => {

        this.snackbarService.error("Verifier votre connexion");
      }
    );

  }

  getRendezVousByCabinet(): void {


    if (!this.user) {
      return;
    }

    this.loading = true;

    this.rdvService.getByCabinet(this.user.id).subscribe({
      next: (response: any) => {
        this.loading = false;

        if (response.statut === 'OK') {
          this.rdvList = response.data;
          this.cd.detectChanges()
        } else {
          this.snackbarService.error(response.message);
        }
      },

      error: () => {
        this.loading = false;
        this.snackbarService.error("Vérifiez votre connexion");
      }
    });
  }

  getPatients() {
    this.cabinetPrestationService.getPatientsCabinet().subscribe(
      (response: any) => {
        this.patientList = response;
        this.cd.detectChanges();
      },
      (error: any) => {
        this.loading = false
        this.snackbarService.error("Vérifier votre connexion");

      }
    );
  }

  annulerRdv(rdvId: number) {
    this.rdvService.annuler(rdvId).subscribe({
      next: () => {

        this.snackbarService.success("Rendez-vous annulé avec succès");
        this.getRendezVousByCabinet();

      },
      error: (err) => {
        console.error(err);
        this.snackbarService.error("Une erreur est survenue lors de l'annulation du rendez-vous.");
      }
    });
  }

  opendCancelConfirmationDialog(rdvId: number) {

    const dialogRef = this.dialog.open(ConfimDialog, {
      data: {
        message: 'Voulez-vous vraiment annuler ce rendez-vous ?',
        isDelete: false,
        onConfirm: () => {
          this.annulerRdv(rdvId);
        }
      }
    });
    dialogRef.afterClosed().subscribe(() => this.getRendezVousByCabinet());
  }

  deleteRdv(rdvId: number) {


    this.rdvService.deleteRendezVous(rdvId).subscribe(
      (response: any) => {
        
        if (response.statut === 'OK') {
   
          this.snackbarService.success("Rendez-vous supprimé avec succès");
          this.getRendezVousByCabinet();
        }
        if (response.statut === 'KO') this.snackbarService.error(response.message);

      },
      (error: any) => {
        this.loading = false;
        console.error(error);
        this.snackbarService.error("Vérifier votre connexion.");
      }
    );
  }

  openConfirmationDialog(rdvId: number) {
    const dialogRef = this.dialog.open(ConfimDialog, {
      data: {
        message: 'Voulez-vous vraiment supprimer ce rendez-vous ?',
        isDelete: true,
        onConfirm: () => {

          this.deleteRdv(rdvId);
          this.getRendezVousByCabinet();
        }
      }
    });

  }

  validerRdv(rdvId: number): void {

    this.rdvService.modifierStatut(rdvId, "VALIDE").subscribe({
      next: () => {

        this.snackbarService.success("Rendez-vous validé avec succès");
        this.getRendezVousByCabinet();
      },
      error: (error: any) => {
        this.snackbarService.error("Une erreur est survenue lors de la validation");
      }
    });
  }

  openValideConfirm(rdvId: number) {
    const dialogRef = this.dialog.open(ConfimDialog,
      {
        data: {
          message: "Voulez-vous vraiment validé ce rendez-vous?",
          isDelete: false,
          onConfirm: () => {
            this.validerRdv(rdvId)
            this.getRendezVousByCabinet()
          }
        }
      }
    )
  }


}
