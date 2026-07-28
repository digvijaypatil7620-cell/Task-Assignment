import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectStudentState=
createFeatureSelector<any>('students');
export const selectStudents =
createSelector(
    selectStudentState,
    state =>state.students
);