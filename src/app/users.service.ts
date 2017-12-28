import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../environments/environment';
import {User} from "./model/user";

@Injectable()
export class UsersService {
  private url = `${environment.api_uri}/users`;

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {
    const u1 = new User();
    const u2 = new User();
    const u3 = new User();
    u1.first_name = 'Jose';
    u1.last_name = 'Perez';
    u1.job_title = 'Prof de Gimnasia';
    u1.email = 'joseperez@lazuly.com';
    u1.image = 'http://2.bp.blogspot.com/-itYtAL5lBeE/TkFdlIhhacI/AAAAAAAABHI/HYGHzdl85UI/s400/111433_aerogenerador.jpg';
    u1.roles = [{code: 'directive', name: 'Directivo'}, {code: 'admin', name: 'Administrador'}];
    u2.first_name = 'Saraza';
    u2.last_name = 'Fruta';
    u2.email = 'saraza.fruta@gmail.com';
    u2.image = 'http://comunicaciones.uc.cl/wp-content/uploads/comunicaciones/2014/09/ingrid_bachmann.jpg';
    u2.roles = [{code: 'admin', name: 'Administrador'}];
    u3.first_name = 'Eva';
    u3.last_name = 'Nose';
    u3.job_title = 'Directora';
    u3.email = 'eva.nose@gmail.com';
    u3.roles = [{code: 'directive', name: 'Directivo'}];
    return Observable.of([u1,u2,u3]);
  }

}
