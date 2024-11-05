import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.config';  // Import your routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import your components
import { LoginComponent } from './login/login.component'; 
import { SignupComponent } from './signup/signup.component'; 
import { RestrictedComponent } from './restricted/restricted.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RestrictedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ensure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
