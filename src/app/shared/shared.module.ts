import { LibsModule } from './libs/libs.module';
import { NgModule } from '@angular/core';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoadingButtonDirective } from './components/loading-button/loading-button.directive';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { TabComponent } from './components/tab/tab.component';
import { IconInputComponent } from './components/icon-input/icon-input.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from './components/modal/modal.module';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    LoadingButtonDirective,
    AlertMessageComponent,
    IconInputComponent,
    TabComponent
  ],
  imports: [LibsModule],
  exports: [
    LoadingButtonComponent,
    LoadingButtonDirective,
    AlertMessageComponent,
    TabComponent,
    IconInputComponent,
    LibsModule,
    ModalModule
  ]
})
export class SharedModule {}
