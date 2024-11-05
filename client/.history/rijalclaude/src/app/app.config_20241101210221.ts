// src/app/app.config.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestrictedComponent } from './restricted/restricted.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restricted', component: RestrictedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
