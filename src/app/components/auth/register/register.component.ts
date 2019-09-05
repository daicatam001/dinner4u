import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ValidateService } from 'src/app/service/validate.service';
import { CustomValidator } from 'src/app/shared/services/validator';
import { LoadingButtonComponent } from 'src/app/shared/components/loading-button/loading-button.component';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  showPassword: boolean = false;
  // @ViewChild(AlertMessageComponent, { static: false })
  // alertMessage: AlertMessageComponent;
  @ViewChild(LoadingButtonComponent, { static: false })
  loadingButton: LoadingButtonComponent;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private validateService: ValidateService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [Validators.required],
          CustomValidator.validUniqueRegisterUsername(this.validateService)
        ],
        email: [
          '',
          [Validators.required],
          CustomValidator.validUniqueRegisterEmail(this.validateService)
        ],
        password: ['', [Validators.required, Validators.minLength(8)]]
      },
      {
        updateOn: 'blur'
      }
    );
  }

  register() {
    if (this.form.invalid) {
      return;
    }
    const { username, email, password } = this.form.value;
    this.loadingButton.loading(true);
    this.form.disable();
    this.authService.register(username, email, password).subscribe(res => {
      this.loadingButton.loading(false);
      this.form.reset();
      this.form.enable();
      console.log(res);
    });
  }

  toggleShowPassword() {
    console.log(1);
    this.showPassword = !this.showPassword;
  }
  get showPasswordIcon() {
    const showPasswordIconClasses = { fa: true };
    showPasswordIconClasses[
      `fa-${this.showPassword ? 'eye-slash' : 'eye'}`
    ] = true;
    return showPasswordIconClasses;
  }
  get type() {
    return this.showPassword ? 'text' : 'password';
  }
  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
}
