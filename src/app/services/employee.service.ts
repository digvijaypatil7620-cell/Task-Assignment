import { Injectable } from '@angular/core';
import { Employee } from '../models/empolyee';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
    private employees: Employee[]=[];
    constructor() {}
    getEmployees(): Employee[]{
        return this.employees;
    }
    addEmployee(employee: Employee){
        employee.id = this.employees.length + 1;
        this.employees.push(employee);
    }
    deleteEmplyee(id:number){
        this.employees =this.employees.filter(x => x.id != id);
    }
}