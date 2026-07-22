import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CapitalizePipe } from '../capitalize-pipe';

@Component({
  selector: 'app-student-list',
  standalone:true,
  imports: [
    CommonModule,
    CapitalizePipe
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

     showStudents = true;

     students =[
      {
        id:1,
        name:'Digvijay',
        course:'Angular',
        city:'Pune'
      },
      {
        id:2,
        name:'rahul',
        course:'React',
        city:'Mumbai'
      },
      {
        id:3,
        name:'amit',
        course:'.Net',
        city:'Nagpur'
      },
      {
        id:4,
        name:'rohan',
        course:'Java',
        city:'Nashik'
      }
     ];

     toggleStudents(){
      this.showStudents = !this.showStudents;
     }
}
