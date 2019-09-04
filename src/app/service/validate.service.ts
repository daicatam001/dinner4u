import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateService extends ApiService {
  constructor(public injector: Injector) {
    super(injector);
    this.setBaseUrl('validate');
  }
  validateRegisterUsername(username: string) {
    return this.post('/register/username', { username });
  }
  validateRegisterEmail(email: string) {
    return this.post('/register/email', { email });
  }
}
