import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { AuthModule } from '../components/auth/auth.module';

@Injectable()
export class AuthService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('user/auth');
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
}
