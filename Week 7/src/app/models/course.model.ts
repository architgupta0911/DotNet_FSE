// Hands-On 6, Task 1, Step 59: Course data model shared across the app
export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}

export interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCourseIds: number[];
}
