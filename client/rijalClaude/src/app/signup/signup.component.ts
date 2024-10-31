import { Component } from '@angular/core';
import { ApiService } from '../app-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone:true,
  imports :[FormsModule,CommonModule,RouterModule]
})
export class SignupComponent {
  formData = {
    username: '',
    email: '',
    password: ''
  };
  username: string | null = '';
  errorMessage: string = '';
  
  constructor(private apiService: ApiService, private router: Router,private sessionService: SessionService) {}

  onSignup() {
    this.apiService.signup(this.formData).subscribe(
        (response) => {
            console.log('Signup success:', response);
            this.sessionService.setUser(response); // Store user details
            this.router.navigate(['/home']); // Redirect to home
        },
        (error) => {
            this.errorMessage = 'Signup failed. Please try again.';
            console.error('Signup error:', error);
        }
    );
}


}
