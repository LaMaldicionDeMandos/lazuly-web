import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";

import { UsersComponent } from "./users.component";

const USERS_ROUTE = [
    { path: '', component: UsersComponent }
];

@NgModule ({
    declarations: [
        UsersComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(USERS_ROUTE)
    ]
})

export class UsersModule {  }
