import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../directives/highlight';
import { Store } from '@ngrx/store';
import * as StudentActions from '../store/actions/student.actions';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Highlight,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {

  constructor(private store: Store) {}

  student = {
    name: '',
    email: '',
    course: '',
    age: null,
    city: ''
  };

  submitForm() {

    // Basic Validation
    if (!this.student.name || !this.student.course) {
      alert('Please fill all required fields.');
      return;
    }

    // Dispatch Action to NgRx Store
    this.store.dispatch(
      StudentActions.addStudent({
        id: Date.now(),
        name: this.student.name,
        course: this.student.course,
        city: this.student.city
      })
    );

    console.log(this.student);
    alert('Student Saved Successfully');
    
    // Reset Form
    this.student = {
      name: '',
      email: '',
      course: '',
      age: null,
      city: ''
    };
  }
}