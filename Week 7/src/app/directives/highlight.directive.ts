import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

// Hands-On 3, Task 3, Step 33 & 37: custom attribute directive.
// @HostListener binds to host element events without manually adding/
// removing listeners - Angular handles cleanup automatically.
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  private el = inject(ElementRef<HTMLElement>);

  // Configurable colour: <div appHighlight="lightblue">
  @Input() appHighlight = 'yellow';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
