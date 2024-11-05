import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  googleLogin() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  setLoginState(isLoggedIn: boolean) {
    this.isAuthenticated = isLoggedIn;
  }
}
