import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCreateComponent } from './components/menu-create/menu-create.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuResolver } from './components/welcome/welcome-menu.resolver';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: MenuResolver
    }
  },
  {
    path: 'home',
    component: HomeComponent,
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
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
