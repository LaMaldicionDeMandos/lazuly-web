import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";

const DASHBOARD_ROUTES = [
    { path: '', component: DashboardComponent }
];

@NgModule ({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(DASHBOARD_ROUTES)
    ]
})

export class DashboardModule {  }
