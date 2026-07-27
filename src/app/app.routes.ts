import { Routes } from '@angular/router';
import { Home } from './home/home';
import { StudentForm } from './student-form/student-form';
import { StudentList } from './student-list/student-list';
import { PostList } from './post-list/post-list';
import { StudentDetails } from './student-details/student-details';
import { Admin } from './admin/admin';
import { authGuard } from './guards/auth-guard';
import { EmployeeForm } from './employee-form/employee-form';

export const routes: Routes = [

    {
        path:'',
        component:Home
    },
    {
        path:'student-form',
        component:StudentForm
    },
    {
        path:'students',
        component:StudentList
    },
    {
        path:'posts',
        component:PostList
    },
    {
        path:'student-details/:id',
        component:StudentDetails
    },
    {
        path:'admin',
        component:Admin,
        canActivate:[authGuard]
    },
    {
         path:'employee-form',
         component:EmployeeForm
    }
    
];
