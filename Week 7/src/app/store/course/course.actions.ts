import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

// Hands-On 9, Task 1, Step 93: the [Course] prefix groups these actions in
// the Redux DevTools timeline so you can filter by feature.
export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
