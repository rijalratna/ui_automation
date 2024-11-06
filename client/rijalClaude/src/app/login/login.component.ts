import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../app-service.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
  private loadUserFromSession() {
    const userData = this.sessionService.getUser();
    if (userData) {
      this.currentUser = userData;
      this.isLoggedIn = true;
    }else{
      console.warn("user in not loged in priviously.")
    }
  }

  private handleLoginResponse(response: any) {
    console.log('Logged in:', response.message);
    this.isLoggedIn = true;
    this.currentUser = { email: response.email, name: response.name };
    this.sessionService.setUser(this.currentUser);
    this.router.navigate(['/home']); // Navigate after successful login
  }
}
