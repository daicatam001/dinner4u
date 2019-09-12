import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {
  user$;
  constructor(
    private modalService: ModalService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
  openAuth(event: Event, isLogin: boolean = false) {
    this.modalService.open(AuthComponent, null, { data: { isLogin } });
    event.preventDefault();
  }
  logout() {
    this.authService.logout();
  }
}
