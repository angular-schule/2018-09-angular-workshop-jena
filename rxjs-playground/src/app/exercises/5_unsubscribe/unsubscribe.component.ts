import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styles: []
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new Subject<string | number>();
  constructor(private es: ExerciseService) {}

  ngOnInit() {
    const interval$ = timer(0, 1000);

    interval$.pipe(
      // ...
    ).subscribe(
      msg => this.log(msg),
      err => this.log('ERROR: ' + err),
      () => this.log('COMPLETED')
    );
  }

  destroy() {
    this.logStream$.next('DESTROY');
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }

  ngOnDestroy() {
    this.destroy();
  }

}
