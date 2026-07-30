import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';


import { selectStudents } from '../store/selectors/student.selectors';
import { StudentCard } from '../student-card/student-card';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StudentCard
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
 constructor(private store: Store) {

  this.students$ = this.store.select(selectStudents);

  this.totalStudents$ = this.students$.pipe(
    map(students => students.length)
  );

  this.totalCourses$ = this.students$.pipe(
    map(students => new Set(students.map(s => s.course)).size)
  );

  this.totalCities$ = this.students$.pipe(
    map(students => new Set(students.map(s => s.city)).size)
  );

}

  toggleStudents() {
    this.showStudents = !this.showStudents;
  }
viewStudent(id: number) {

  this.selectedStudentId = id;

  console.log("Selected Student :", id);

}

}