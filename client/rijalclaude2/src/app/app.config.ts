// src/app/app.config.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { AuthGuard } from './auth.guard'; // Ensure AuthGuard is imported

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'login', component: LoginComponent },  // Login route
  { path: 'signup', component: SignupComponent },  // Signup route
  { path: 'restricted', component: RestrictedComponent, canActivate: [AuthGuard] }  // Restricted route with guard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configure router with routes
  exports: [RouterModule]  // Export RouterModule for use in other modules
})
export class AppRoutingModule { }
