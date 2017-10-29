import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from "./register-user/register-user.component";
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';



export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: RegisterUserComponent },
    { path: 'login', component: RegisterUserComponent },
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
    {
        path: '404', component: ErrorComponent
    },
    { path: '**', redirectTo: '/404' }
];