# Student Course Portal

Angular (v20, standalone components) project built for the Digital Nurture 5.0
.NET Full Stack Engineer Track - Angular Hands-On Exercise Book. All 10
hands-on exercises are implemented in this single project, built incrementally:

| Hands-On | Topic | Where to look |
|---|---|---|
| 1 | Setup, project structure, first components | `src/app/components/header`, `src/app/pages/home` |
| 2 | Binding types, lifecycle hooks, @Input/@Output | `home.component.ts`, `course-card.component.ts` |
| 3 | Directives & pipes | `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts` |
| 4 | Template-driven forms | `pages/enrollment-form` |
| 5 | Reactive forms, FormArray, custom/async validators | `pages/reactive-enrollment-form` |
| 6 | Services & DI | `services/course.service.ts`, `services/enrollment.service.ts`, `components/notification` |
| 7 | Routing, guards, lazy loading | `app.routes.ts`, `guards/`, `pages/enrollment.routes.ts` |
| 8 | HttpClient, RxJS operators, interceptors | `services/course.service.ts`, `interceptors/` |
| 9 | NgRx store, actions, reducers, effects, selectors | `store/course`, `store/enrollment` |
| 10 | Unit tests (Jasmine/Karma/TestBed) | `*.spec.ts` files throughout |

## Prerequisites

- Node.js 20+ and npm
- Angular CLI v20: `npm install -g @angular/cli`
- JSON Server (mock REST API): `npm install -g json-server`

## Setup

```bash
npm install
```

## Run the mock backend

The app reads/writes courses through a mock REST API backed by `db.json`.
Run this in one terminal and keep it running:

```bash
npm run mock-api
# equivalent to: json-server --watch db.json --port 3000
```

## Run the app

In a second terminal:

```bash
npm start
# ng serve, then open http://localhost:4200
```

## Run unit tests

```bash
npm test
# ng test --code-coverage   (for a coverage report in coverage/)
```

## Build for production

```bash
npm run build
```

## Notes

- All components are standalone (Angular 17+/20 default) - there is no
  `AppModule`; `src/app/app.config.ts` plays that role.
- `notes.txt` at the project root contains the Hands-On 1 file-purpose notes.
- The `/enroll` route is lazy-loaded (see `app.routes.ts` and
  `pages/enrollment.routes.ts`) - check the Network tab to see its chunk
  download only on first visit.
- NgRx DevTools: install the Redux DevTools Chrome extension to inspect the
  action -> effect -> reducer -> selector flow for courses and enrollments.
