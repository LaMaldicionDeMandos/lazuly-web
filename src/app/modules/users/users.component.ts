import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {User} from "../../model/user";
import {AuthService} from "../../auth.service";
import {Role} from "../../model/role";

@Component({
    selector: 'lazuly-users',
  styleUrls: ['./users.component.scss'],
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
    users:User[];
    roles:Role[];

    constructor(private userService:UsersService, private authService:AuthService) {

    }

    ngOnInit() {
      this.userService.getUsers().subscribe((users) => this.users = users);
      this.authService.getRolesBo().subscribe((roles) => {
        console.log("Roles: " + roles);
        this.roles = roles
      });
    }

}
