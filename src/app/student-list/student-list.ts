import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CapitalizePipe } from '../capitalize-pipe';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { selectStudents } from '../store/selectors/student.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-student-list',
  standalone:true,
  imports: [
    CommonModule,
    CapitalizePipe,
    RouterLink
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

     showStudents = true;
     students$!:Observable<any>;
    //  students =[
    //   {
    //     id:1,
    //     name:'Digvijay',
    //     course:'Angular',
    //     city:'Pune'
    //   },
    //   {
    //     id:2,
    //     name:'rahul',
    //     course:'React',
    //     city:'Mumbai'
    //   },
    //   {
    //     id:3,
    //     name:'amit',
    //     course:'.Net',
    //     city:'Nagpur'
    //   },
    //   {
    //     id:4,
    //     name:'rohan',
    //     course:'Java',
    //     city:'Nashik'
    //   }
    //  ];

     toggleStudents(){
      this.showStudents = !this.showStudents;
     }
     constructor(private store:Store){
      this.students$=
      this.store.select(selectStudents);
     }
}
