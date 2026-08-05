import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './delete-dialog.html',
  styleUrl: './delete-dialog.css'
})
export class DeleteDialog {

  constructor(

    public dialogRef: MatDialogRef<DeleteDialog>,

    @Inject(MAT_DIALOG_DATA)

    public data: any

  ) {}

  onCancel() {

    this.dialogRef.close(false);

  }

  onDelete() {

    this.dialogRef.close(true);

  }

}