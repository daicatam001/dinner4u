import {NgModule} from '@angular/core';
import {MenuListComponent} from './menu-list.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [MenuListComponent],
  imports: [SharedModule],
  exports: [MenuListComponent]
})
export class MenuModule {

}
