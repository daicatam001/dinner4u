import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  TemplateRef,
  Type,
  ComponentRef
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalModule } from './modal.module';
import { ModalConfig } from './modal.config';
import { ModalInjector } from './modal.injector';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: ModalModule
})
export class ModalService {
  modalComponentRef;
  afterCloseSubject = new Subject<any>();
  afterClose$ = this.afterCloseSubject.asObservable();
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  appendToBody(config: ModalConfig) {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const map = new WeakMap();
    map.set(ModalConfig, config);
    const componentRef = factory.create(new ModalInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);
    const dialogEl = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.append(dialogEl);
    this.modalComponentRef = componentRef;
  }
  removeFormBody() {
    this.appRef.detachView(this.modalComponentRef.hostView);
    this.modalComponentRef.destroy();
  }
  open(contentType: Type<any> | TemplateRef<any>, config?: ModalConfig) {
    this.appendToBody(config);
    this.modalComponentRef.instance.contentChild = contentType;
  }
  close() {
    this.removeFormBody();
    this.afterCloseSubject.next();
  }
}
