import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

// Hands-On 3 (structural directives), Hands-On 7 (query params),
// Hands-On 9 (NgRx-backed course list).
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  courses$ = this.store.select(selectAllCourses);
  isLoading$ = this.store.select(selectCoursesLoading);
  error$ = this.store.select(selectCoursesError);

  searchTerm = '';

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
  }

  onSearch(): void {
    this.router.navigate(['courses'], { queryParams: { search: this.searchTerm || null } });
  }

  // Hands-On 3, Task 1, Step 26: trackBy avoids re-rendering every card on
  // any array change - only items whose id actually changed are updated.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  goToCourse(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }
}
