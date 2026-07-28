import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Hands-On 7, Task 2, Step 75-76: functional CanActivate guard (the modern
// standalone-friendly equivalent of a class-based `implements CanActivate`).
// Redirects to home and blocks navigation if the user isn't logged in.
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
