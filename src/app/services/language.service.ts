import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {

    // Available languages
    this.translate.addLangs(['en', 'hi']);

    // Default language
    this.translate.setDefaultLang('en');

    // Current language
    this.translate.use('en');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}