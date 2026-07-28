import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

// Hands-On 7, Task 1 & 2: route config with dynamic segments, nested routes,
// a lazy-loaded enrollment feature, and guarded routes.
// The ** wildcard route is always last, since Angular matches routes in order.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses-layout/courses-layout.component').then((m) => m.CoursesLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/course-list/course-list.component').then((m) => m.CourseListComponent)
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/course-detail/course-detail.component').then((m) => m.CourseDetailComponent)
      }
    ]
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/student-profile/student-profile.component').then((m) => m.StudentProfileComponent)
  },
  {
    // Hands-On 7, Task 2, Step 73: lazy-loaded "enrollment" feature area.
    // In the standalone API, loadChildren pointing at a routes array is the
    // equivalent of lazily loading an NgModule - Angular downloads a
    // separate JS chunk the first time this path is visited.
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/enrollment.routes').then((m) => m.ENROLLMENT_ROUTES)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];
