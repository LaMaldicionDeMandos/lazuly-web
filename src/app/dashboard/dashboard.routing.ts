import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
    { path: '', component: DashboardComponent, children: [
        //Home
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: '../modules/home/home.module#HomeModule' },

    ]}
];

export const DashboardRouting = RouterModule.forChild(DASHBOARD_ROUTES);
