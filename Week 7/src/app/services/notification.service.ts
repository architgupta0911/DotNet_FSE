import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Hands-On 6, Task 2, Step 67: this service is provided at COMPONENT level
// (see NotificationComponent's `providers` array), not root. That means each
// instance of NotificationComponent (and its children) gets its own separate
// instance of this service, instead of sharing one app-wide singleton.
@Injectable()
export class NotificationService {
  private messageSubject = new BehaviorSubject<string | null>(null);
  message$ = this.messageSubject.asObservable();

  show(message: string): void {
    this.messageSubject.next(message);
  }

  clear(): void {
    this.messageSubject.next(null);
  }
}
