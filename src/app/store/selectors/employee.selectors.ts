import { createFeatureSelector,createSelector } from '@ngrx/store';
import { EmployeeState } from '../state/employee.state';



export const selectEmployeeState=

createFeatureSelector<EmployeeState>('employees');

export const selectEmployees=createSelector(

selectEmployeeState,

state=>state.employees

);