// snackbar.service.ts
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from '../../components/dialogs/snackbar/snackbar';

export type SnackbarType = 'success' | 'error' | 'info';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    private defaultDuration = 4000;

    constructor(private snackBar: MatSnackBar) {}

    success(message: string, duration?: number): void {
        this.show(message, 'success', duration);
    }

    error(message: string, duration?: number): void {
        this.show(message, 'error', duration);
    }

    info(message: string, duration?: number): void {
        this.show(message, 'info', duration);
    }

    private show(message: string, type: SnackbarType, duration?: number): void {
        this.snackBar.openFromComponent(Snackbar, {
            data: { message, type },
            duration: duration || this.defaultDuration,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['custom-snackbar']
        });
    }
}