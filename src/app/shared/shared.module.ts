import { LibsModule } from './libs/libs.module';
import { NgModule } from '@angular/core';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoadingButtonDirective } from './components/loading-button/loading-button.directive';

@NgModule({
  declarations: [LoadingButtonComponent, LoadingButtonDirective],
  exports: [LoadingButtonComponent, LoadingButtonDirective, LibsModule]
})
export class SharedModule {}
