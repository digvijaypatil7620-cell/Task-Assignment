import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    user={
      email:'',
      password:''
    };
    error='';
    constructor(
      private authService:AuthService,
      private router:Router
    ){}
    login(){
        console.log(this.user);
      this.authService.login(this.user).subscribe({
        next:()=>{
          alert("Login Successful");
          this.router.navigate(['/dashboard']);
        },
        error:(err)=>{
           console.log(err);
          this.error="Invaild Credentials";
        }
      });
    }
}
