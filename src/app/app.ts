import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from './services/auth.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('D P PATIL COLLEGE OF ENGINEERING');

  selectedLanguage = 'en';

  constructor(
    private authService: AuthService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  logout() {

    this.authService.logout();

    this.router.navigate(['/login']);

  }

  changeLanguage() {

    this.languageService.changeLanguage(this.selectedLanguage);

  }

}