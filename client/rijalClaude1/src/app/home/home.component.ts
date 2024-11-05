import { Component } from '@angular/core';
import { ApiService } from '../app-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string | null = '';
  password: string = '';
  errorMessage: string = '';
  isLoggedIn: boolean = false;

  constructor(private apiService: ApiService,private sessionService: SessionService) {}
  ngOnInit(): void {
    this.username = this.sessionService.getUsername();
  }
  login() {
    const loginData = { username: this.username, password: this.password };

    this.apiService.login(loginData).subscribe({
      next: (response) => {
        // Handle successful login response here
        console.log('Login successful', response);
        this.apiService.isLoggedIn = true;
        this.isLoggedIn = true;
      },
      error: (error) => {
        // Handle error case
        console.log(error)
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
    this.isLoggedIn=this.apiService.isLoggedIn
  }
  logout() {
    this.isLoggedIn = false; // Reset login state
    this.apiService.isLoggedIn = false;
    sessionStorage.clear
    this.username = '';
    this.password = '';
  }
}
