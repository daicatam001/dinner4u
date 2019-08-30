import { NgModule } from '@angular/core';
import { MenuCreateComponent } from './menu-create/menu-create.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { HomeComponent } from './home/home.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  exports: [MenuCreateComponent],
  imports: [SharedModule],
  declarations: [MenuCreateComponent, MenuListComponent, HomeComponent, HomeHeroComponent, HomeContentComponent, AuthComponent]
})
export class ComponentsModule {}
