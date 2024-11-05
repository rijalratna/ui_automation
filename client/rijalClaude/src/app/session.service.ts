import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    private USER_KEY = 'currentUser';
    setUser(user: any): void {
        sessionStorage.setItem(this.USER_KEY, JSON.stringify(user)); // Store user in session storage
    }

    getUser(): any {
        return JSON.parse(sessionStorage.getItem(this.USER_KEY) || 'null'); // Retrieve user
    }

    getUsername(): string | null {
        const user = this.getUser();
        return user ? user.name : null; // Return username or null
    }

    isAuthenticated(): boolean {
        return this.getUser() !== null; // Check if user exists in session storage
    }

    clearSession(): void {
        sessionStorage.removeItem(this.USER_KEY); // Clear user from session storage
    }
}
