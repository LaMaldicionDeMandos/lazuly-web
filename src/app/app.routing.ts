import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: '', loadChildren: './layout/layout.module#LayoutModule' }
];

export const routing = RouterModule.forRoot(ROUTES);
