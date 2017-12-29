import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {User} from "../../model/user";
import {AuthService} from "../../auth.service";
import {Role} from "../../model/role";
import _ from "lodash";

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
      this.authService.getRolesBo().subscribe((roles) => {
        this.roles = roles;
        this.userService.getUsers()
          .map((users:User[]) => users.filter((user:User) => _.some(roles, (role) => this.hasRole(user, role))))
          .subscribe((users) => this.users = users);
      });
    }

    private hasRole(user, role):boolean {
      return _.some(user.roles, (r) => r.code == role.code);
    }

    removeUser(user:User) {
      console.log(`Removing user ${user.email}`);
    }

    removeRole(role:Role, user:User) {
      console.log(`Removing role ${role.code} from user ${user.email}`);
    }

    addRole(role:Role, user:User) {
      console.log(`Adding role ${role.code} to user ${user.email}`);
    }

}
