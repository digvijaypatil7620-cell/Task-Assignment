export interface Student{
    id:number;
    name:string;
    course:string;
    city:string;
}

export interface StudentState{
    students:Student[];
}

export const initialState:StudentState={
    students:[]
};