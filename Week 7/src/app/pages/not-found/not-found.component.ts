import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <h2>404</h2>
      <p>The page you're looking for doesn't exist.</p>
      <a routerLink="/">Go home</a>
    </section>
  `,
  styles: [`.not-found { padding: 48px; text-align: center; }`]
})
export class NotFoundComponent {}
