import { LibsModule } from './libs/libs.module';
import { NgModule } from '@angular/core';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoadingButtonDirective } from './components/loading-button/loading-button.directive';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { BsIconInputComponent } from './components/bs-icon-input/bs-icon-input.component';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    LoadingButtonDirective,
    AlertMessageComponent,
    BsIconInputComponent
  ],
  imports: [LibsModule],
  exports: [
    LoadingButtonComponent,
    LoadingButtonDirective,
    AlertMessageComponent,
    BsIconInputComponent,
    LibsModule
  ]
})
export class SharedModule {}
