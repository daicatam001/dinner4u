import {
  Component,
  OnInit,
  Type,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  OnDestroy,
  ComponentRef
} from '@angular/core';
import { ModalContentDirective } from './modal-content.directive';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  componentRef: ComponentRef<any>;
  contentChild: Type<any> | TemplateRef<any>;
  @ViewChild(ModalContentDirective, { static: false })
  modalContent: ModalContentDirective;
  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    if (this.contentChild) {
      this.loadContentChild();
      this.cd.detectChanges();
    }
  }
  loadContentChild() {
    let viewContainerRef = this.modalContent.viewContainerRef;
    viewContainerRef.clear();
    if (this.contentChild instanceof TemplateRef) {
      viewContainerRef.createEmbeddedView(this.contentChild);
    } else {
      const factory = this.resolver.resolveComponentFactory(this.contentChild);
      this.componentRef = viewContainerRef.createComponent(factory);
    }
  }
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
