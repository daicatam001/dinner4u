import { LibsModule } from './libs/libs.module';
import { NgModule } from '@angular/core';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoadingButtonDirective } from './components/loading-button/loading-button.directive';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    LoadingButtonDirective,
    AlertMessageComponent
  ],
  imports: [LibsModule],
  exports: [
    LoadingButtonComponent,
    LoadingButtonDirective,
    AlertMessageComponent,
    LibsModule
  ]
})
export class SharedModule {}
