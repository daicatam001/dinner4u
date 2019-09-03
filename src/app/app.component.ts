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
  constructor(
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}
  ngOnInit() {
    // const factory = this.resolver.resolveComponentFactory(AuthComponent);
    // const componentRef = factory.create(this.injector);
    // componentRef.instance.dataTest = 'xsxs';
    // componentRef.changeDetectorRef.detectChanges();
    // this.modalService.open(componentRef);
    // setTimeout(() => {
    //   this.modalService.close();
    // }, 200000);
  }
}
