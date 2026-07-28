import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

// Hands-On 6, Task 2, Step 67: NotificationService is provided HERE, at
// component level (`providers: [NotificationService]`), not `providedIn:
// 'root'`. That creates a brand-new NotificationService instance scoped to
// this component (and any children) - separate from any other instance
// elsewhere in the app. Useful when you want isolated state per usage,
// e.g. a toast banner local to one page rather than a single global one.
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  notificationService = inject(NotificationService);
}
