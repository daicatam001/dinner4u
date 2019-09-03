import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalContentDirective } from './modal-content.directive';

@NgModule({
  imports: [],
  exports: [ModalContentDirective],
  declarations: [ModalComponent, ModalContentDirective],
  entryComponents: [ModalComponent],
  providers: []
})
export class ModalModule {}
