import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
    { path: '', component: DashboardComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: '../modules/home/home.module#HomeModule' },
        { path: 'users', loadChildren: '../modules/users/users.module#UsersModule' },
        { path: 'teachers', loadChildren: '../modules/teachers/teachers.module#TeachersModule' },

    ]}
];

export const DashboardRouting = RouterModule.forChild(DASHBOARD_ROUTES);
