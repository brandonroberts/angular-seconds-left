import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { DeadlineService } from '../../deadline.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    @let deadline = timeLeft();

    Seconds left to deadline: {{ deadline }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly deadlineService = inject(DeadlineService);

  timeLeft = toSignal(this.deadlineService.getCountdown());
}
