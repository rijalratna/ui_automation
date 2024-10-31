import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ApiService } from './app-service.service';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class AppComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  currentUser: any = null;
  showLoginOptions: boolean = false;

  constructor(private appService: ApiService, private sessionService: SessionService, private router: Router) {
    this.loadUserFromSession();
  }

  private loadUserFromSession() {
    const userData = this.sessionService.getUsername();
    if (userData) {
      this.currentUser = JSON.parse(userData);
      this.isLoggedIn = true;
    }
  }

  onLoginWithCredentials(event: Event) {
    event.preventDefault();
    const formData = { username: this.username, password: this.password };

    this.appService.login(formData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.sessionService.setUser(response);
        this.router.navigate(['/home']);
        this.loadUserFromSession(); // Reload user data after login
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
    this.isLoggedIn = false; // Update login state
    this.currentUser = null; // Clear current user data
    this.router.navigate(['/signup']);
  }

  loginWithGoogle() {
    this.appService.loginWithGoogle().subscribe({
      next: (response) => this.handleLoginResponse(response),
      error: (error) => console.error('Google login failed:', error),
    });
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
    this.sessionService.setUsername(JSON.stringify(this.currentUser));
    this.router.navigate(['/home']); // Navigate after social login
  }
}
