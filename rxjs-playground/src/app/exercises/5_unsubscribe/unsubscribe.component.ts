import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';
import { ExerciseService } from '../exercise.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styles: []
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new Subject<string | number>();
  destroy$ = new Subject();

  constructor(private es: ExerciseService) {}

  ngOnInit() {
    const interval$ = timer(0, 1000);

    interval$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      msg => this.log(msg),
      err => this.log('ERROR: ' + err),
      () => this.log('COMPLETED')
    );
  }

  destroy() {
    this.logStream$.next('DESTROY');
    this.destroy$.next('');
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }

  ngOnDestroy() {
    this.destroy();
  }

}
