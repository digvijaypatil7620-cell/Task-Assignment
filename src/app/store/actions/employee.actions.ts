import { createAction, props } from "@ngrx/store";
import { Employee } from "../../models/empolyee";

export const addEmployee = createAction(
  '[Employee] Add',
  props<{ employee: Employee }>()
);

export const updateEmployee = createAction(
  '[Employee] Update',
  props<{ employee: Employee }>()
);

export const deleteEmployee = createAction(
  '[Employee] Delete',
  props<{ id: number }>()
);