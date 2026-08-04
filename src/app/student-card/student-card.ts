import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {

  @Input() student: any;

  @Output() viewStudent = new EventEmitter<number>();
  @Output() generateQR = new EventEmitter<any>();

  onViewStudent() {

    this.viewStudent.emit(this.student.id);

  }
   onGenerateQR() {
    this.generateQR.emit(this.student);
  }

}