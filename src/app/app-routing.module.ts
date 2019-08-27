import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuCreateComponent } from './components/menu-create/menu-create.component';

const routes: Routes = [
  { path: '', component: MenuListComponent },
  {
    path: 'create-menu',
    component: MenuCreateComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
