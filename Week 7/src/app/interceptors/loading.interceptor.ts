import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

// Hands-On 8, Task 3, Step 91: toggles the global spinner around every HTTP
// call. `finalize` runs whether the request completes or errors, so the
// spinner never gets stuck on - equivalent to a try/finally.
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.setLoading(true);

  return next(req).pipe(finalize(() => loadingService.setLoading(false)));
};
