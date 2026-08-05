import { Employee } from "../../models/empolyee";


export interface EmployeeState{

employees:Employee[];

}

export const initialState:EmployeeState={

employees:[]

};