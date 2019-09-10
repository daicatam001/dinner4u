import { NgModule } from '@angular/core';
import { MenuCreateComponent } from './menu-create/menu-create.component';
import { SharedModule } from '../shared/shared.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { HomeComponent } from './home/home.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { AuthModule } from './auth/auth.module';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { WelcomeHeroComponent } from './welcome/welcome-hero/welcome-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { WelcomeContentComponent } from './welcome/welcome-content/welcome-content.component';
import { MenuResolver } from './welcome/welcome-menu.resolver';

@NgModule({
  exports: [
    MenuCreateComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    AuthModule
  ],
  imports: [SharedModule],
  declarations: [
    MenuCreateComponent,
    MenuListComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeContentComponent,
    HeaderLayoutComponent,
    WelcomeHeroComponent,
    WelcomeComponent,
    FooterLayoutComponent,
    WelcomeContentComponent
  ]
})
export class ComponentsModule {}
