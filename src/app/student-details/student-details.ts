import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [],
  standalone:true,
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {

  studentId:number=0;
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(){
    this.studentId = Number(
      this.route.snapshot.paramMap.get('id')
    );
  }
}
