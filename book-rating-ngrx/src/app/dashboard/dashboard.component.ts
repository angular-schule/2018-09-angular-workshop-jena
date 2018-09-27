import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';
import { State } from '../store/reducers';
import { LoadBooks } from '../store/actions/books.actions';
import { getBooksLoading, getAllBooks } from '../store/selectors/books.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));
  books$ = this.store.pipe(select(getAllBooks));

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
  }
}
