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
import { ModalConfig, ModalData } from './modal.config';
import { ModalInjector } from './modal.injector';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: ModalModule
})
export class ModalService {
  modalComponentRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  appendToBody(map: WeakMap<any, any>) {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);

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
  open(
    contentType: Type<any> | TemplateRef<any>,
    config?: ModalConfig,
    data?: ModalData
  ) {
    const map = new WeakMap();
    map.set(ModalConfig, config || new ModalConfig());
    map.set(ModalData, data || new ModalData());
    this.appendToBody(map);
    this.modalComponentRef.instance.contentChild = contentType;
    const sub = this.modalComponentRef.instance.afterClosed$.subscribe(() => {
      this.removeFormBody();
      sub.unsubscribe();
    });
  }
  close() {
    this.modalComponentRef.instance.close();
  }
}
