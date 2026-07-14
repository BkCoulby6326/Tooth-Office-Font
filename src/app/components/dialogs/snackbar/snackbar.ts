import { NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

export interface SnackbarData {
    message: string;
    type: 'success' | 'error' | 'info';
}

@Component({
  selector: 'app-snackbar',
  imports: [NgClass],
  templateUrl: './snackbar.html',
  styleUrl: './snackbar.css',
  
})
export class Snackbar {

  constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData,
        private snackBarRef: MatSnackBarRef<Snackbar>
    ) {}

    iconMap = {
        success: 'bi-check-circle-fill',
        error: 'bi-x-circle-fill',
        info: 'bi-info-circle-fill'
    };

    dismiss(): void {
        this.snackBarRef.dismiss();
    }

}
