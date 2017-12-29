import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../environments/environment';
import {User} from "./model/user";
import {AuthService} from "./auth.service";

@Injectable()
export class UsersService {
  private url = `${environment.api_uri}/users`;

  constructor(private http:HttpClient, private authService:AuthService) { }

  getUsers():Observable<User[]> {
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `bearer ${this.authService.getAccessToken()}`);
    const options = {headers: headers};
    return this.http.get(this.url, options);
  }

}
