import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Login} from "./login/login.model";
import { environment } from '../environments/environment';

@Injectable()
export class AuthService implements CanActivate {

  private url = `${environment.api_uri}/login`;

  constructor(private router: Router, private http:HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    this.router.navigate(['/login']);
    return false;
  }

  login(user: Login):Observable<any> {
    console.log(JSON.stringify(user));
    let promise = this.http.post(this.url, user)
    promise.subscribe((result) => console.log(JSON.stringify(result)), (error) => console.log(JSON.stringify(error)));
    return promise;
  }

}
