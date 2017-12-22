import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";
import {Login} from "./login/login.model";
import { environment } from '../environments/environment';
import {Credentials} from "./credentials";

@Injectable()
export class AuthService implements CanActivate {

  private loginUrl = `${environment.api_uri}/login`;
  private refreshUrl = `${environment.api_uri}/refresh`;
  private forgotUrl = `${environment.api_uri}/forgot/`;

  constructor(private router: Router, private http:HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if ( this.hasToken() && !this.isExpired()) {
      console.log('hasToken and not expired');
      return true;
    } else if (this.hasToken()) {
      console.log('hasToken but expired');
      return this.refresh(this.getRefreshToken())
        .do((flag) => flag || this.goToLogin());
    } else {
      console.log('has not Token');
    }
    this.goToLogin();
    return false;
  }

  private goToLogin(): void {
    this.router.navigate(['/login']);
  }

  getCredentials():Credentials {
    let credentials:Credentials = JSON.parse(localStorage.getItem('credentials'));
    return credentials;
  }

  getAccessToken():string {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken():string {
    return localStorage.getItem('refreshToken');
  }

  getExpires():number {
    return Number.parseInt(localStorage.getItem('expiresAt'));
  }

  hasToken(): boolean {
    return localStorage.getItem('accessToken') != null;
  }

  isExpired():boolean {
    return !this.hasToken() || !this.validateExpiration();
  }

  private validateExpiration(): boolean {
    let today = new Date().getTime();
    let expires_at:number = this.getExpires();
    return expires_at >= today;
  }

  private refresh(refreshToken: string):Observable<boolean> {
    console.log('Getting credentials with refreshToken');
    return this.http.get(`${this.refreshUrl}/${refreshToken}`)
      .map((credentials: Credentials) => {
      this.saveCredentials(credentials);
      return !this.isExpired();
    });
  }

  login(user: Login):Observable<Credentials> {
    console.log(JSON.stringify(user));
    return this.http.post(this.loginUrl, user).do((credentials: Credentials) => this.saveCredentials(credentials));
  }

  private saveCredentials(credentials: Credentials): void {
    localStorage.setItem('accessToken', credentials.access_token);
    localStorage.setItem('refreshToken', credentials.refresh_token);
    localStorage.setItem('expiresAt', (new Date().getTime() + credentials.expires_in * 1000).toString());
    localStorage.setItem('schoolId', credentials.school_id.toString());
    localStorage.setItem('lastName', credentials.last_name);
    localStorage.setItem('firstName', credentials.first_name);
    localStorage.setItem('credentials', JSON.stringify(credentials));
    console.log(JSON.stringify(credentials));
  }

  forgotPassword(email:string):Observable<any> {
    console.log(`request new password for ${email}`);
    return this.http.post(this.forgotUrl + email, null);
  }

}
