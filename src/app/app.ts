import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Home } from './home/home';
import { StudentForm } from './student-form/student-form';
import { About } from './about/about';
import { StudentList } from "./student-list/student-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Home,
    StudentForm,
    About,
    StudentList
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-management');
}