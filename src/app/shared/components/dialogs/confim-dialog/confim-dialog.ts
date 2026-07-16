import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export interface ConfirmationData {
    message: string;
    isDelete?: boolean;
    onConfirm?: () => void;
}
@Component({
  selector: 'app-confim-dialog',
  imports: [MatDialogModule],
  templateUrl: './confim-dialog.html',
  styleUrl: './confim-dialog.css',
})


export class ConfimDialog {

 isDeleteAction: boolean = false;
  constructor(
        public dialogRef: MatDialogRef<ConfimDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmationData
    ) {
        this.isDeleteAction = data.isDelete || false;
    }

   onCancelClick(): void {
       
        this.dialogRef.close(false);
    }

    onConfirmClick(): void {
       if (this.data.onConfirm) {
            this.data.onConfirm();
        }
        this.dialogRef.close(true);
    }
}
