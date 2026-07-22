import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    FormsModule,
    Highlight  ],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {

  student = {
    name: '',
    email: '',
    course: '',
    age: null
  };

  submitForm() {
    console.log(this.student);
    alert('Student Saved Successfully');
  }
}