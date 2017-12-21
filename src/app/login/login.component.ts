import { Component, OnInit } from '@angular/core';
import {Login} from "./login.model";
import {AuthService} from "../auth.service";
import {Credentials} from "../credentials";
import {Router} from "@angular/router";

@Component({
  selector: 'lazuly-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user:Login = new Login();
  forgetEmail:string;
  errors:boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.errors = false;
    console.log(`login -> username: ${this.user.username}, password: ${this.user.password}`);
    this.authService.login(this.user).subscribe(
      (credentials: Credentials) => this.goToDashboard(),
      (error) => this.showErrors());

  }

  forget():void {
    console.log(`Peticion de regenerar contraseña para ${this.forgetEmail}`);
  }

  private goToDashboard(): void {
    this.router.navigate(['/']);
  }

  private showErrors(): void {
    this.errors = true;
  }

}
