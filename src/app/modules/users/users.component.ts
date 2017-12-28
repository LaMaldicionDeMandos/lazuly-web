import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {User} from "../../model/user";

@Component({
    selector: 'lazuly-users',
  styleUrls: ['./users.component.scss'],
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
    users:User[];

    constructor(private userService:UsersService) {

    }

    ngOnInit() {
      this.userService.getUsers().subscribe((users) => this.users = users);
    }

}
