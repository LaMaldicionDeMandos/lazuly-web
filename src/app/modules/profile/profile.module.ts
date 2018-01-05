import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";

import { ProfileComponent } from "./profile.component";

const PROFILE_ROUTE = [
    { path: '', component: ProfileComponent }
];

@NgModule ({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(PROFILE_ROUTE)
    ]
})

export class ProfileModule {  }
