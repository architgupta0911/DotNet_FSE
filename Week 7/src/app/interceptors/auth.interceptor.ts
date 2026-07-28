import { HttpInterceptorFn } from '@angular/common/http';

// Hands-On 8, Task 3, Step 88: clones every outgoing request and attaches a
// mock bearer token as an Authorization header.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: { Authorization: 'Bearer mock-token-12345' }
  });
  return next(authReq);
};
