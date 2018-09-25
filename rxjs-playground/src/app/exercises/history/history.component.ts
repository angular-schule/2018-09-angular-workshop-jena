import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  @Input() logStream: Observable<string>;

  messages: string[] = [];

  constructor() { }

  ngOnInit() {
    this.logStream.subscribe(m => {
      this.messages.push(m);
    });

    this.logStream.pipe(debounceTime(20)).subscribe(() => this.updateScroll());
  }

  updateScroll() {
    const el = this.scrollContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  }

  clearHistory() {
    this.messages = [];
  }

}
