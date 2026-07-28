import { Pipe, PipeTransform } from '@angular/core';

// Hands-On 3, Task 3, Step 35: transforms a raw credits number into a
// human-readable label. Pure by default - only re-runs when the input
// reference changes, which keeps it cheap.
@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    if (!credits || credits <= 0) {
      return 'No Credits';
    }
    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
