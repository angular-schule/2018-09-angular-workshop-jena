import { Component } from '@angular/core';
import { timer, Observable, of, from } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating!';

  constructor() {

    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE')
    };

    // of(1, 2, 3, 4, 5).subscribe(observer);
    // from([5, 6, 7, 8]).subscribe(observer);

    timer(0, 1000).pipe(
      map(e => e + 10),
      filter(e => e % 2 === 0)
    )
    .subscribe(observer);

  }
}
