import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

// Hands-On 9, Task 2, Step 99: selectEnrolledCourses is a cross-slice
// selector - it combines the enrollment slice with the course slice to
// derive joined data without duplicating course details in enrollment state.
export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(selectEnrollmentState, (state) => state.enrolledCourseIds);

export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, ids) => courses.filter((c) => ids.includes(c.id))
);
