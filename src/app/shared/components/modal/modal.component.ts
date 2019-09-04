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
  ComponentRef,
  Input
} from '@angular/core';
import { ModalContentDirective } from './modal-content.directive';
import { ModalService } from './modal.service';
import { Subject } from 'rxjs';
import { ModalConfig } from './modal.config';

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

  afterClosedSubject = new Subject();
  public afterClosed$ = this.afterClosedSubject.asObservable();
  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    public modalConfig: ModalConfig
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
  onOverlayClicked(event: MouseEvent) {
    if (!this.modalConfig.disabledCloseOnClickOverlay) {
      this.close();
    }
  }
  get size() {
    if (this.modalConfig.size) {
      return 'modal-' + this.modalConfig.size;
    }
  }
  onModalClicked(event: MouseEvent) {
    event.stopPropagation();
  }
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
  close() {
    this.afterClosedSubject.next();
  }
}
