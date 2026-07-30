import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { selectStudents } from '../store/selectors/student.selectors';
import { CollegeCard } from '../college-card/college-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CollegeCard
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  selectedModule = 'student';

  totalStudents$: Observable<number>;

  totalCourses$: Observable<number>;

  totalCities$: Observable<number>;

  totalTeachers = 5;

  totalDepartments = 4;

  totalPosts = 100;

  constructor(
    private store: Store,
    private router: Router
  ) {

    const students$ = this.store.select(selectStudents);

    this.totalStudents$ = students$.pipe(
      map(data => data.length)
    );

    this.totalCourses$ = students$.pipe(
     map(data => new Set(data.map((s: any) => s.course)).size)
    );

    this.totalCities$ = students$.pipe(
     map(data => new Set(data.map((s: any) => s.city)).size)
    );

  }

  navigate(module: string) {

    switch (module) {

      case 'students':
        this.router.navigate(['/students']);
        break;

      case 'teachers':
        this.router.navigate(['/employee-form']);
        break;

      case 'posts':
        this.router.navigate(['/posts']);
        break;

      case 'addStudent':
        this.router.navigate(['/student-form']);
        break;

    }

  }

}