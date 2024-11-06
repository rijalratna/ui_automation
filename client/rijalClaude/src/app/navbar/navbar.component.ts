import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiService } from '../app-service.service';
import { FileResponse } from '../FileResponse';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'rijalClaude';
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  currentUser: any = null;
  showLoginOptions: boolean = false;

  constructor(private appService: ApiService, private sessionService: SessionService, private router: Router) {
    this.loadUserFromSession();
  }
  ngOnInit() {
    this.appService.getUserInfo().subscribe({
        next: (user) => {
            this.currentUser = user; // Store user info in component
            this.isLoggedIn = true; // Update login state
        },
        error: (error) => console.error('Failed to fetch user info:', error),
    });
}
  private loadUserFromSession() {
    const userData = this.sessionService.getUser();
    if (userData) {
      this.currentUser = userData;
      this.isLoggedIn = true;
    }else{
      console.warn("user in not loged in priviously.")
    }
  }

  onLoginWithCredentials(event: Event) {
    event.preventDefault();
    const formData = { username: this.username, password: this.password };

    this.appService.login(formData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.handleLoginResponse(response);
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }

  toggleLoginOptions() {
    this.showLoginOptions = !this.showLoginOptions;
  }

  logout() {
    this.sessionService.clearSession();
    this.isLoggedIn = false;
    this.currentUser = null;
    this.router.navigate(['/signup']);
  }

  loginWithGoogle() {
    this.appService.loginWithGoogle();
    // .subscribe({
    //   next: (response) => this.handleLoginResponse(response),
    //   error: (error) => console.error('Google login failed:', error),
    // });
  }

  loginWithFacebook() {
    this.appService.loginWithFacebook().subscribe({
      next: (response) => this.handleLoginResponse(response),
      error: (error) => console.error('Facebook login failed:', error),
    });
  }

  loginWithAmazon() {
    this.appService.loginWithAmazon().subscribe({
      next: (response) => this.handleLoginResponse(response),
      error: (error) => console.error('Amazon login failed:', error),
    });
  }

  private handleLoginResponse(response: any) {
    console.log('Logged in:', response.message);
    this.isLoggedIn = true;
    this.currentUser = { email: response.email, name: response.name };
    this.sessionService.setUser(this.currentUser);
    this.router.navigate(['/home']); // Navigate after successful login
  }
}
