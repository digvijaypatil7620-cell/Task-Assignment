import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as QRCode from 'qrcode';
import html2canvas from 'html2canvas';

import { MatDialog } from '@angular/material/dialog';
import { DeleteDialog } from '../dialogs/delete-dialog/delete-dialog';
import { Employee } from '../models/empolyee';
@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css'
})
export class EmployeeCard {

  @Input()

employee!: Employee;

  @Output() viewEmployee = new EventEmitter<number>();

  @Output() deleteEmployee = new EventEmitter<number>();
  @Output()

  editEmployee = new EventEmitter<number>();
  qrCodeImage = '';
  showQR = false;
  onView() {

    this.viewEmployee.emit(this.employee.id);

  }

  constructor(

    private dialog: MatDialog

  ) { }
  onDelete() {

    const dialogRef = this.dialog.open(DeleteDialog, {

      width: '400px',

      data: {

        name: this.employee.name

      }

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.deleteEmployee.emit(this.employee.id);

      }

    });

  }
  async generateQR() {
    const qrData =
      `Teacher Name : ${this.employee.name}
     Department : ${this.employee.department}
     Subject : ${this.employee.subject}
     Qualification : ${this.employee.qualification}
     Experience : ${this.employee.experience} Years
      Email : ${this.employee.email}
      Phone : ${this.employee.phone}
      City : ${this.employee.city}`;

    this.qrCodeImage = await QRCode.toDataURL(qrData);
    this.showQR = true;
  }

  async downloadQR() {
    const element = document.getElementById(
      'employeeQR' + this.employee.id
    );
    if (!element) {
      return;
    }

    const convas = await html2canvas(element);
    const link = document.createElement('a');

    link.download =

      `${this.employee.name}_QR.png`;

    link.href = convas.toDataURL();

    link.click();
  }
  onEdit() {

    this.editEmployee.emit(

      this.employee.id

    );

  }

}