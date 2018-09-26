import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];
  url = '//angular.schule';
  d = new Date();

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    // this.books = this.bs.getAllStatic();
    this.bs.getAll()
      .subscribe(books => this.books = books);
  }

  updateSortList(book: Book) {
    this.bs.update(book.isbn, book).subscribe(() => {
      const cleanedList = this.books.filter(b => b.isbn !== book.isbn);
      cleanedList.push(book);
      cleanedList.sort((a, b) => b.rating - a.rating);
      this.books = cleanedList;
    });
  }

  addBookToList(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.books = [...this.books, book];
    });
  }

}