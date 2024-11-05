import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Making it a singleton service
})
export class SessionService {

  constructor() {}

  private isSessionStorageAvailable(): boolean {
    return typeof sessionStorage !== 'undefined';
  }
  isAuthenticated(): boolean {
    return this.getUsername() !== null; // Check if username exists in session storage
}

setUsername(username: string): void {
  if (this.isSessionStorageAvailable()) {
      sessionStorage.setItem('username', username);
      console.log(`Username set: ${username}`);
  } else {
      console.warn('SessionStorage is not available.');
  }
}

getUsername(): string | null {
  if (this.isSessionStorageAvailable()) {
      const username = sessionStorage.getItem('username');
      console.log(`Username retrieved: ${username}`);
      return username;
  } else {
      console.warn('SessionStorage is not available.');
      return null;
  }
}


  clearSession(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('user'); // Clear user data as well
  }
  setUser(user: any): void {
    if (this.isSessionStorageAvailable()) {
        sessionStorage.setItem('user', JSON.stringify(user)); // Store user as JSON
    }
}

getUser(): any | null {
    if (this.isSessionStorageAvailable()) {
        const userJson = sessionStorage.getItem('user');
        return userJson ? JSON.parse(userJson) : null; // Parse JSON to object
    }
    return null;
}
}
