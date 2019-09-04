import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from 'src/app/service/auth.service';

const Components = [AuthComponent, LoginComponent, RegisterComponent];
@NgModule({
  imports: [SharedModule],
  exports: Components,
  declarations: Components,
  providers: [AuthService]
})
export class AuthModule {}
