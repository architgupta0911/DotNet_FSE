import { Injectable, signal } from '@angular/core';

// Hands-On 7, Task 2, Step 75: minimal auth stand-in used by the AuthGuard.
// isLoggedIn is hardcoded true for now, as the exercise instructs; a real
// implementation would set this from a login flow / stored token.
@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal(true);

  get isLoggedIn(): boolean {
    return this.loggedIn();
  }

  login(): void {
    this.loggedIn.set(true);
  }

  logout(): void {
    this.loggedIn.set(false);
  }
}
