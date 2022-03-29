import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  auth: any = {
    email: '',
    password: '',
  };

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.auth.email, this.auth.password);
  }
}
