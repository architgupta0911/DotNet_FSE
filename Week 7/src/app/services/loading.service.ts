import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Hands-On 8, Task 3, Step 91: backs the global loading spinner.
// The loading interceptor flips isLoading$ true/false around every HTTP call.
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();
  private activeRequests = 0;

  setLoading(loading: boolean): void {
    this.activeRequests += loading ? 1 : -1;
    this.loadingSubject.next(this.activeRequests > 0);
  }
}
