import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCreateComponent } from './components/menu-create/menu-create.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuResolver } from './components/welcome/welcome-menu.resolver';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    resolve: {
      data: MenuResolver
    }
  },
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
