import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
  styles: []
})
export class FromeventComponent implements OnInit {

  currentWidth: number = 0;

  ngOnInit() {
    fromEvent(window, 'resize').pipe(
      map((e: Event) => (e.currentTarget as Window).innerWidth),
      startWith(window.innerWidth),
      debounceTime(200)
    )
    .subscribe(e => this.currentWidth = e);
  }

}
