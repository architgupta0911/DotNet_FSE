import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

// Hands-On 8, Task 3, Step 90: global HTTP error handling.
// 401 -> redirect to login/home. 500 -> would show a global notification
// (wired through NotificationService in a real app). Error is re-thrown so
// the calling component/service can still react locally if it needs to.
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server error - please try again later.');
      }
      return throwError(() => error);
    })
  );
};
