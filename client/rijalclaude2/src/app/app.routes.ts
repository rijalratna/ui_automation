import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restricted', component: RestrictedComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404 page
];
