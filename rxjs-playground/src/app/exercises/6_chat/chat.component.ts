import { Component, OnInit } from '@angular/core';
import { Subject, merge, concat, race, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rxw-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  msg = {
    julia$: new Subject<string>(),
    georg$: new Subject<string>(),
    john$: new Subject<string>()
  }

  logStream$ = new Subject<string>();

  constructor() { }

  ngOnInit() {
    forkJoin(
      this.msg.julia$.pipe(map(msg => 'JULIA: ' + msg)),
      this.msg.georg$.pipe(map(msg => 'GEORG: ' + msg)),
      this.msg.john$.pipe(map(msg => 'JOHN:  ' + msg))
    ).subscribe(
      msg => this.logStream$.next(msg),
      err => {},
      () => this.logStream$.next('ALL MEMBERS LEFT')
    )
  }

}
