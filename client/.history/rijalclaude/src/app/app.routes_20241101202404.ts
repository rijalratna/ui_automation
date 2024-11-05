import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { authGuard } from './auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restricted', component: RestrictedComponent, canActivate: [authGuard] },
];
