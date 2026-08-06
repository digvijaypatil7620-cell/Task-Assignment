import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { Employee } from '../models/empolyee';
import { EmployeeCard } from '../employee-card/employee-card';

import { selectEmployees } from '../store/selectors/employee.selectors';

import * as EmployeeActions from '../store/actions/employee.actions';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    EmployeeCard
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  searchText = '';

  selectedEmployeeId: number | null = null;

  employees: Employee[] = [];

  filteredEmployees: Employee[] = [];

  totalTeachers = 0;

  totalDepartments = 0;

  totalSubjects = 0;

  totalCities = 0;

  constructor(

    private store: Store,

    private router: Router

  ) {

    this.store.select(selectEmployees)

      .subscribe(data => {
       console.log("Employees Store",data);
        this.employees = data;

        this.filteredEmployees = [...data];

        this.calculateDashboard();

      });

  }

  calculateDashboard() {

    this.totalTeachers = this.employees.length;

    this.totalDepartments =

      new Set(

        this.employees.map(x => x.department)

      ).size;

    this.totalSubjects =

      new Set(

        this.employees.map(x => x.subject)

      ).size;

    this.totalCities =

      new Set(

        this.employees.map(x => x.city)

      ).size;

  }

  searchEmployee() {

    const value = this.searchText.toLowerCase();

    this.filteredEmployees = this.employees.filter(emp =>

      emp.name.toLowerCase().includes(value) ||

      emp.department.toLowerCase().includes(value) ||

      emp.subject.toLowerCase().includes(value) ||

      emp.city.toLowerCase().includes(value)

    );

  }

  viewEmployee(id: number) {

    this.selectedEmployeeId = id;

  }

  editEmployee(id: number) {

    this.router.navigate(

      ['/employee-form', id]

    );

  }

  deleteEmployee(id: number) {

    this.store.dispatch(

      EmployeeActions.deleteEmployee({

        id

      })

    );

  }
  

}