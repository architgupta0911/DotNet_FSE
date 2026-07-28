import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

// Hands-On 6, Task 2, Step 66: displays the student's enrolled courses,
// resolved through EnrollmentService (which itself uses CourseService).
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  private enrollmentService = inject(EnrollmentService);

  enrolledCourses: Course[] = [];

  async ngOnInit(): Promise<void> {
    this.enrolledCourses = await this.enrollmentService.getEnrolledCourses();
  }
}
