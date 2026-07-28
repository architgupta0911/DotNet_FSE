import { Injectable, inject, signal, computed } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

// Hands-On 6, Task 2, Step 63-64: EnrollmentService demonstrates
// service-to-service injection - it depends on CourseService to resolve IDs
// to full Course objects. State is held in a signal so components can react
// to it without manual subscriptions.
@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private courseService = inject(CourseService);
  private enrolledCourseIds = signal<number[]>([]);

  readonly enrolledIds = computed(() => this.enrolledCourseIds());

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.update((ids) => [...ids, courseId]);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds.update((ids) => ids.filter((id) => id !== courseId));
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds().includes(courseId);
  }

  getEnrolledCourses(): Promise<Course[]> {
    return new Promise((resolve) => {
      this.courseService.getCourses().subscribe((all) => {
        resolve(all.filter((c) => this.enrolledCourseIds().includes(c.id)));
      });
    });
  }
}
