import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingButtonComponent } from 'src/app/shared/components/loading-button/loading-button.component';
import { AlertMessageComponent } from 'src/app/shared/components/alert-message/alert-message.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage;
  @ViewChild(LoadingButtonComponent, { static: false })
  loadingButton: LoadingButtonComponent;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
      rememberMe: [false]
    });
  }
  login() {
    this.loadingButton.loading(true);
    this.form.disable();
    const { username, password, rememberMe } = this.form.value;
    this.authService.login(username, password, rememberMe).subscribe(
      () => {
        this.loadingButton.loading(false);
        this.form.enable();
      },
      error => {
        console.log('TCL: LoginComponent -> login -> error', error);
        this.loadingButton.loading(false);
        this.form.enable();
        this.errorMessage = error.error.message;
      }
    );
  }
}
