import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

fdescribe('BookRatingService', () => {
  let rs: BookRatingService;
  let book: Book;

  beforeEach(() => {
    book = {
      title: '',
      description: '',
      isbn: '',
      rating: 3
    };
  });
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    rs = TestBed.get(BookRatingService);
  });

  it('should be created', () => {
    const service: BookRatingService = TestBed.get(BookRatingService);
    expect(service).toBeTruthy();
  });

  it('should not change anything else than rating', () => {
    const ratedBook = rs.rateUp(book);
    const ratedBook2 = rs.rateDown(ratedBook);

    expect(ratedBook2.title).toBe(book.title);
    expect(ratedBook2.description).toBe(book.description);
    expect(ratedBook2.isbn).toBe(book.isbn);
  });

  it('should increase the rating by 1 for rateUp', () => {
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(4); // konkreter Wert, nicht reimplementieren
  });
  
  it('should decrease the rating by 1 for rateDown', () => {
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });
  
  it('should not be allowed to rate lower than 1', () => {
    book.rating = 1;

    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

  it('should not be allowed to rate higher than 5', () => {
    book.rating = 5;

    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });
});
