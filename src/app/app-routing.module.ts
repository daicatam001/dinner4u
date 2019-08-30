import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCreateComponent } from './components/menu-create/menu-create.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },

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
