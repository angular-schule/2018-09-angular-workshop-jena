import { Component } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating!';

  constructor() {

    const myObs = timer(0, 1000).pipe(take(5));
    // import { timer } from 'rxjs';
    // import { take } from 'rxjs/operators';

    const sub = myObs.subscribe(
      e => console.log(e),
      err => console.error(err),
      () => console.log('COMPLETE')
    );

    setTimeout(() => {
      sub.unsubscribe();
    }, 3000);


    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE')
    };


    // Funktion: Producer Function
    const myObs2 = new Observable((observer1) => {
      observer1.next(3);
      observer1.next(4);

      setTimeout(() => {
        observer1.next(5);
        observer1.complete();

        // kommt nicht durch, weil nach complete!
        observer1.next(6);
      }, 2000);
    });

    myObs2.subscribe(observer);

  }
}
