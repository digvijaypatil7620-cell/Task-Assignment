import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from './services/auth.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('D P PATIL COLLEGE OF ENGINEERING');

  constructor(

  private authService: AuthService,

  private router: Router

) {}

logout(){
  this.authService.logout();
  this.router.navigate(['/login']);
}
}