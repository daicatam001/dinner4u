import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome.component';
import {WelcomeContentComponent} from './welcome-content/welcome-content.component';
import {WelcomeHeroComponent} from './welcome-hero/welcome-hero.component';
import {SharedModule} from '../../shared/shared.module';
import {MenuModule} from '../menu-list/menu.module';

@NgModule({
  declarations: [WelcomeComponent, WelcomeContentComponent, WelcomeHeroComponent],
  imports: [SharedModule, MenuModule],
  exports: [WelcomeComponent, WelcomeContentComponent, WelcomeHeroComponent]
})
export class WelcomeModule {
  
}
