import { NgModule } from '@angular/core';
import { MenuCreateComponent } from './menu-create/menu-create.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  exports: [MenuCreateComponent],
  imports: [SharedModule],
  declarations: [MenuCreateComponent, MenuListComponent]
})
export class ComponentsModule {}
