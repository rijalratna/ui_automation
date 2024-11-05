import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.config';  // Adjust the import path if necessary
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { HomeComponent } from './home/home.component';          // Import HomeComponent
import { LoginComponent } from './login/login.component';        // Import LoginComponent
import { SignupComponent } from './signup/signup.component';      // Import SignupComponent
import { RestrictedComponent } from './restricted/restricted.component'; // Import RestrictedComponent
import { AuthGuard } from './auth.guard';                        // Import AuthGuard
import { AuthService } from './auth.service';                    // Import AuthService

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,           // Declare HomeComponent
    LoginComponent,          // Declare LoginComponent
    SignupComponent,         // Declare SignupComponent
    RestrictedComponent      // Declare RestrictedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule         // Import your routing module here
  ],
  providers: [AuthService, AuthGuard],  // Register AuthService and AuthGuard as providers
  bootstrap: [AppComponent]
})
export class AppModule { }
