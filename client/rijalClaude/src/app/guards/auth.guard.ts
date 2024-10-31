// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../session.service'; // Adjust the import path accordingly

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

    canActivate(): boolean {
        if (this.sessionService.isAuthenticated()) {
            return true; // Allow access
        } else {
            this.router.navigate(['/signup']); // Redirect to signup/login
            return false; // Prevent access
        }
    }
}
