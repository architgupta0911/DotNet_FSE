import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { NotificationComponent } from '../../components/notification/notification.component';

// Hands-On 1 Task 2, Hands-On 2 Tasks 1-2: dashboard / home page.
// Demonstrates all four binding types plus ngOnInit/ngOnDestroy.
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private courseService = inject(CourseService);

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesAvailable = 0;

  ngOnInit(): void {
    // Hands-On 2, Task 2, Step 16: ngOnInit fires once inputs are set -
    // the right place for data fetching, unlike the constructor.
    this.courseService.getCourses().subscribe((courses) => {
      this.coursesAvailable = courses.length;
    });
    console.log('HomeComponent initialised - courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // [property] is one-way, component -> DOM (e.g. [disabled]).
  // [(ngModel)] is two-way, DOM <-> component: it's shorthand for
  // [ngModel]="prop" (ngModelChange)="prop = $event".
}
