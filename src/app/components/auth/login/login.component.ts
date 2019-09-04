import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
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
    const { username, password, rememberMe } = this.form.value;
    this.authService.login(username, password, rememberMe).subscribe(res => {
      console.log(res);
    });
  }
}
