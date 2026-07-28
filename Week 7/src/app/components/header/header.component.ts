import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Hands-On 1, Task 2, Step 6-7: top navigation bar.
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
