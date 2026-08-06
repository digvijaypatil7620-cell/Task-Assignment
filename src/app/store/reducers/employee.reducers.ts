import { createReducer, on } from '@ngrx/store';

import * as EmployeeActions from '../actions/employee.actions';

import {
  EmployeeState,
  initialState
} from '../state/employee.state';

export const employeeReducer = createReducer(

  initialState,

 on(EmployeeActions.addEmployee, (state, { employee }) => {

  console.log("Reducer Running", employee);

  return {

    ...state,

    employees: [

      ...state.employees,

      employee

    ]

  };

}),

  on(EmployeeActions.updateEmployee, (state, { employee }) => ({

    ...state,

    employees: state.employees.map(emp =>

      emp.id === employee.id

        ? employee

        : emp

    )

  })),

  on(EmployeeActions.deleteEmployee, (state, { id }) => ({

    ...state,

    employees: state.employees.filter(emp =>

      emp.id !== id

    )

  }))

);