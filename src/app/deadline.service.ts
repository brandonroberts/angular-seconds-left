import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { timer } from 'rxjs';
import { map, retry, shareReplay, switchMap } from 'rxjs/operators';

interface DeadlineResponse {
  secondsLeft: number;
}

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  private readonly http = inject(HttpClient);

  private getDeadline() {
    return this.http.get<DeadlineResponse>('/api/deadline.json');
  }

  getCountdown() {
    return timer(0, 1000).pipe(
      switchMap(() => {
        return this.getDeadline().pipe(
          map(response => {
            const timeLeft = (response.secondsLeft - new Date().getTime());
            return timeLeft > 0 ? Math.trunc(timeLeft / 1000) : 0;
          }),
          retry(),
        )
      }),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}