import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeHeaderComponent} from './home-header/home-header.component';
import {HomeContentComponent} from './home-content/home-content.component';
import {SharedModule} from '../../shared/shared.module';
import {MenuModule} from '../menu-list/menu.module';


@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, HomeContentComponent],
  imports: [SharedModule, MenuModule],
  exports: [HomeComponent, HomeHeaderComponent, HomeContentComponent]
})
export class HomeModule {

}
