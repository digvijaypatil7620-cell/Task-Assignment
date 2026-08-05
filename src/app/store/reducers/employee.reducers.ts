import { createReducer, on } from '@ngrx/store';

import * as EmployeeActions from '../actions/employee.actions';

import { Employee } from '../../models/empolyee';

export const initialState: Employee[] = [];

export const employeeReducer = createReducer(

  initialState,

  on(EmployeeActions.addEmployee, (state, { employee }) => [

    ...state,

    employee

  ]),

  on(EmployeeActions.updateEmployee, (state, { employee }) =>

    state.map(emp =>

      emp.id === employee.id

        ? employee

        : emp

    )

  ),

  on(EmployeeActions.deleteEmployee, (state, { id }) =>

    state.filter(emp =>

      emp.id !== id

    )

  )

);