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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
