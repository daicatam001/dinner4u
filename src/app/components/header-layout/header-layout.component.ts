import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}
  openAuth(event: Event, isLogin: boolean = false) {
    this.modalService.open(AuthComponent, null, { data: { isLogin } });
    event.preventDefault();
  }
}
