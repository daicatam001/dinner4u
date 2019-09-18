import {NgModule} from '@angular/core';
import {MenuCreateComponent} from './menu-create/menu-create.component';
import {SharedModule} from '../shared/shared.module';
import {MenuListComponent} from './menu-list/menu-list.component';
import {AuthModule} from './auth/auth.module';
import {HeaderLayoutComponent} from './header-layout/header-layout.component';
import {WelcomeHeroComponent} from './welcome/welcome-hero/welcome-hero.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {FooterLayoutComponent} from './footer-layout/footer-layout.component';
import {WelcomeContentComponent} from './welcome/welcome-content/welcome-content.component';
import {MenuResolver} from './welcome/welcome-menu.resolver';
import {HomeModule} from './home/home.module';
import {WelcomeModule} from './welcome/welcome.module';
import {MenuModule} from './menu-list/menu.module';

@NgModule({
  exports: [
    MenuCreateComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    AuthModule
  ],
  imports: [SharedModule, HomeModule, WelcomeModule, MenuModule],
  declarations: [
    MenuCreateComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
  ]
})
export class ComponentsModule {
}
