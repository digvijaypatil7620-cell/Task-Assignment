import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {

  @Input() student: any;

  @Output() viewStudent = new EventEmitter<number>();

  onViewStudent() {

    this.viewStudent.emit(this.student.id);

  }

}