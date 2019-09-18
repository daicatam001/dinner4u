import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import * as jwt from 'jsonwebtoken';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService extends ApiService {
  private isAuth: boolean = false;
  private userSub = new BehaviorSubject<string>(null);
  user$ = this.userSub.asObservable();
  private expiredTimer;

  constructor(injector: Injector, private router: Router) {
    super(injector);
    this.setBaseUrl('user/auth');
  }

  checkAuth() {
    return this.isAuth;
  }

  login(username: string, password: string, rememberMe?: boolean) {
    return this.post('/login', {
      username,
      password,
      rememberMe
    });
  }
  register(username: string, email: string, password: string) {
    return this.post('/register', {
      username,
      email,
      password
    });
  }
  accessSuccess(user: string, token: string, expireDuration: number) {
    const now = new Date();
    const expiredTime = new Date(
      now.getTime() + expireDuration * 1000
    ).getTime();
    this.updateUser(user);
    this.setExpiredTimer(expireDuration);
    this.saveAuth(user, token, expiredTime);
    this.router.navigate(['/']);
  }
  updateUser(user: string) {
    this.isAuth = user ? true : false;
    this.userSub.next(user);
  }
  setExpiredTimer(expireDuration) {
    clearTimeout(this.expiredTimer);
    this.expiredTimer = setTimeout(() => {
      this.logout();
    }, expireDuration * 1000);
  }
  saveAuth(user: string, token: string, expiredTime: number) {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);
    localStorage.setItem('expiredTime', expiredTime.toString());
  }

  getAuth() {
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('token') &&
      localStorage.getItem('expiredTime')
    ) {
      return {
        user: localStorage.getItem('user'),
        token: localStorage.getItem('token'),
        expiredTime: +localStorage.getItem('expiredTime')
      };
    }
    return null;
  }
  logout() {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
    localStorage.setItem('expiredTime', '');
    this.updateUser(null);
    this.router.navigate(['/']);
  }
}
