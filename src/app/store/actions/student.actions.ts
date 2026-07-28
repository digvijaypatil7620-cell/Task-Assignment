import { createAction, props } from '@ngrx/store';

export const addStudent = createAction(
  '[Student] Add Student',
  props<{
    id: number;
    name: string;
    course: string;
    city: string;
  }>()
);

export const loadStudents = createAction(
  '[Student] Load Students'
);