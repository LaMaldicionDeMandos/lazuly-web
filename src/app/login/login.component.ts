import { Component, OnInit } from '@angular/core';
import {Login} from "./login.model";
import {AuthService} from "../auth.service";

@Component({
  selector: 'lazuly-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user:Login = new Login();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    console.log(`login -> username: ${this.user.username}, password: ${this.user.password}`);
    this.authService.login(this.user);
  }

}
