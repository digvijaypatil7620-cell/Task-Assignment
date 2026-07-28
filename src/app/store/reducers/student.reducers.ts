import { createReducer, on } from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import { initialState } from '../state/student.state';

export const studentReducer = createReducer(

  initialState,

  on(StudentActions.addStudent, (state, { id, name, course, city }) => ({

    ...state,

    students: [
      ...state.students,
      { id, name, course, city }
    ]

  }))

);