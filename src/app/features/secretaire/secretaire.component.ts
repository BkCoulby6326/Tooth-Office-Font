import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RendezVousService } from '../rendez-vous/rdv.service';
import { Consultation } from '../consultation/consultation';
import { ResponseApi } from '../../core/models/ResponseApi';
import { CabinetPrestation } from '../cabinet/cabinet-prestation/cabinet-prestation';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RendezVousCreate } from '../../core/models/rendez-vous/rdv-create';
import { TypeRdvEnum } from '../../core/enums/type-rdv-enum';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfimDialog } from '../../shared/components/dialogs/confim-dialog/confim-dialog';
import {ToastService} from '../../shared/services/toast.service';


@Component({
  selector: 'app-secretaire-page.component',
  imports: [FormsModule, DatePipe, MatProgressSpinnerModule

  ],
  templateUrl: './secretaire.component.html',
  styleUrl: './secretaire.component.css',
})
export class SecretaireComponent implements OnInit {

  dentistes: any[] = [];
  prestations: any[] = [];
  rdvList: any[] = [];
  patientList: any[] = [];
  loading: boolean = false;
  constructor(
    private rdvService: RendezVousService,
    private cabinetPrestationService: CabinetPrestation,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private snackbarService: ToastService
  ) {

  }

  ngOnInit(): void {
    this.getDentistes();
    this.getPrestationsByCabinet();
    this.getRendezVousByCabinet();
    this.getPatients();
  }

  patientRecherche = '';

  patientSelectionne: any = null;

  patientsFiltres: any[] = [];

  nouveauRdv: RendezVousCreate = {

    dateRdv: '',

    notes: '',

    typeRdv: TypeRdvEnum.SURPLACE,

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
    return !this.nouveauRdv.patientId || !this.nouveauRdv.dentisteId || !this.nouveauRdv.dateRdv;
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

    this.loading = true; // Start loading
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
          this.loading = false; // Stop loading
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
    this.cabinetPrestationService.getDentisteCabinet(1).subscribe(
      (response: any) => {

        this.dentistes = response;
        console.log("les dentistes ", this.dentistes);

      },
      (error: any) => {
        this.snackbarService.error("Erreur lors de la récupération des dentistes");
        console.error('Erreur lors de la récupération des dentistes:', error);
      }
    );
  }

  getPrestationsByCabinet() {
    this.cabinetPrestationService.getByCabinet(2).subscribe(
      (response: any) => {
        if (response.statut === 'OK') {
          this.prestations = response.data;
         this.cd.detectChanges();

        }
        if(response.statut === 'KO') this.snackbarService.error(response.message);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des prestations du cabinet:', error);
        this.snackbarService.error("Erreur lors de la récupération des prestations du cabinet");
      }
    );

  }

  getRendezVousByCabinet() {
    this.loading = true; // Start loading
    this.rdvService.getByCabinet(2).subscribe(
      (response: any) => {
        this.loading = false;
        if (response.statut === 'OK') {
          this.rdvList = response.data;
          this.cd.detectChanges();

        }
        if(response.statut === 'KO') this.snackbarService.error(response.message);
      },
      (error: any) => {
        this.loading = false; // Stop loading
        this.snackbarService.error("Erreur lors de la récupération des rendez-vous du cabinet");
        console.error('Erreur lors de la récupération des rendez-vous du cabinet:', error);
      }
    );
  }

  getPatients() {
    this.cabinetPrestationService.getPatientsCabinet().subscribe(
      (response: any) => {
        this.patientList = response;
        this.cd.detectChanges();
      },
      (error: any) => {
        this.snackbarService.error("Erreur lors de la récupération des patients du cabinet");
        console.error('Erreur lors de la récupération des patients du cabinet:', error);
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
    this.loading = false;

    this.rdvService.deleteRendezVous(rdvId).subscribe(
      (response: any) => {
        console.log("deleteRdv called with rdvId:", response);
        this.loading = false;
        if (response.statut === 'OK') {
          this.snackbarService.success("Rendez-vous supprimé avec succès");
          this.getRendezVousByCabinet();
        }
        if(response.statut === 'KO') this.snackbarService.error(response.message);

      },
      (error: any) => {
        this.loading = false;
        console.error(error);
        this.snackbarService.error("Une erreur est survenue lors de la suppression du rendez-vous.");
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


}
