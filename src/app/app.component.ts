import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector
} from '@angular/core';
import { ModalService } from './shared/components/modal/modal.service';
import { ModalComponent } from './shared/components/modal/modal.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    const authInfo = this.authService.getAuth();
    if (authInfo) {
      const expireDuration = +authInfo.expiredTime - new Date().getTime();
      if (expireDuration < 0) {
        this.authService.logout();
      } else {
        this.authService.setExpiredTimer(expireDuration / 1000);
        this.authService.updateUser(authInfo.user);
      }
    }
  }
}
