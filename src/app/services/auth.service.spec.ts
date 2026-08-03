import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

  let service: AuthService;

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(AuthService);

    localStorage.clear();

  });

  it('should create service', () => {

    expect(service).toBeTruthy();

  });

  it('should login successfully', (done) => {

    service.login({

      email: 'admin@college.com',

      password: 'admin123'

    }).subscribe(response => {

      expect(response.token).toBeTruthy();

      done();

    });

  });

  it('should store token', (done) => {

    service.login({

      email: 'admin@college.com',

      password: 'admin123'

    }).subscribe(() => {

      expect(localStorage.getItem('token')).toBeTruthy();

      done();

    });

  });

  it('should logout', () => {

    localStorage.setItem('token', 'abc');

    service.logout();

    expect(localStorage.getItem('token')).toBeNull();

  });

  it('should return false when not logged in', () => {

    expect(service.isLoggedIn()).toBeFalse();

  });

});