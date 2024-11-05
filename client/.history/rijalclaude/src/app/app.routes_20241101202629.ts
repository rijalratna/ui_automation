import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [  // <-- Add the export keyword here
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restricted', component: RestrictedComponent, canActivate: [AuthGuard] },
];
