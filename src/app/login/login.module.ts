import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./login.component";
import {FormsModule} from "@angular/forms";

const LOGIN_ROUTES = [
    { path: '', component: LoginComponent }
];

@NgModule ({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(LOGIN_ROUTES),
        FormsModule
    ]
})

export class LoginModule {  }
