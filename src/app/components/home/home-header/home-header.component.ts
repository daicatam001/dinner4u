import {
  Component,
  OnInit,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ApplicationRef
} from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { AuthComponent } from '../../auth/auth.component';

@Component({
  selector: 'home-hero',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}
  openAuth(event: Event, isLogin: boolean = false) {
    this.modalService.open(AuthComponent, null, { data: { isLogin } });
    event.preventDefault();
  }
}
