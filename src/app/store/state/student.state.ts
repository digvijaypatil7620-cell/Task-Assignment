export interface Student{
    id:number;
    name:string;
    course:string;
    city:string;
}

export interface StudentState{
    employees: any;
    students:Student[];
}

export const initialState:StudentState={
    students:[]
};