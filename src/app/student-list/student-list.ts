import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { selectStudents } from '../store/selectors/student.selectors';
import { StudentCard } from '../student-card/student-card';

import * as QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StudentCard,
    TranslateModule
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentList {

  showStudents = true;

  students$!: Observable<any[]>;

  totalStudents$!: Observable<number>;

  totalCourses$!: Observable<number>;

  totalCities$!: Observable<number>;

  selectedStudentId: number | null = null;

  selectedStudent: any = null;

  qrCodeImage: string = '';

  constructor(private store: Store) {

    this.students$ = this.store.select(selectStudents);

    this.totalStudents$ = this.students$.pipe(
      map(students => students.length)
    );

    this.totalCourses$ = this.students$.pipe(
      map(students =>
        new Set(students.map(student => student.course)).size
      )
    );

    this.totalCities$ = this.students$.pipe(
      map(students =>
        new Set(students.map(student => student.city)).size
      )
    );

  }

  toggleStudents() {

    this.showStudents = !this.showStudents;

  }

  viewStudent(id: number) {

    this.selectedStudentId = id;

    alert("Student ID : " + id);

  }

  async generateQR(student: any) {

    this.selectedStudent = student;

    const qrText =

`Student ID : ${student.id}

Name : ${student.name}

Course : ${student.course}

City : ${student.city}`;

    this.qrCodeImage = await QRCode.toDataURL(qrText);

    setTimeout(() => {

      const modal = new (window as any).bootstrap.Modal(
        document.getElementById('qrModal')
      );

      modal.show();

    }, 100);

  }

  downloadQR() {

    const card = document.getElementById('qrCard');

    if (!card) return;

    html2canvas(card).then(canvas => {

      const link = document.createElement('a');

      link.download = `${this.selectedStudent.name}_QR.png`;

      link.href = canvas.toDataURL('image/png');

      link.click();

    });

  }

}