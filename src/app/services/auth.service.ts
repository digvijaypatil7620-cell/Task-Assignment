import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(credentials: any): Observable<any> {

    if (
      credentials.email === 'admin@college.com' &&
      credentials.password === 'admin123'
    ) {

      const token = 'college-management-jwt-token';

      localStorage.setItem('token', token);

      return of({
        token: token
      });

    }

    return throwError(() => new Error('Invalid Credentials'));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

}