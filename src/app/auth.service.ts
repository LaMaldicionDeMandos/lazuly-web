import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    this.router.navigate(['/login']);
    return false;
  }

}
