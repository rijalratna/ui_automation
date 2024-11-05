// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.config';  // Correctly import AppRoutingModule
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';  // Import NavbarComponent
import { HomeComponent } from './home/home.component';  // Import HomeComponent
import { LoginComponent } from './login/login.component';  // Import LoginComponent
import { SignupComponent } from './signup/signup.component';  // Import SignupComponent
import { RestrictedComponent } from './restricted/restricted.component';  // Import RestrictedComponent

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,  // Declare NavbarComponent
    HomeComponent,     // Declare HomeComponent
    LoginComponent,    // Declare LoginComponent
    SignupComponent,   // Declare SignupComponent
    RestrictedComponent // Declare RestrictedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   // Import your routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
