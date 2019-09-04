import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalContentDirective } from './modal-content.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [ModalContentDirective],
  declarations: [ModalComponent, ModalContentDirective],
  entryComponents: [ModalComponent],
  providers: []
})
export class ModalModule {}
