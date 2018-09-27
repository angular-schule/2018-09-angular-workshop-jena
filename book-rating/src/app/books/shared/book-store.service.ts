import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books`).pipe(
      map(rawBooks => rawBooks.map(
        rawBook => this.mapToBook(rawBook)
      ))
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.apiUrl}/book/${isbn}`).pipe(
      map(rawBook => this.mapToBook(rawBook))
    );
  }


  private mapToBook(rawBook: any): Book {
    return {
      title: rawBook.title,
      isbn: rawBook.isbn,
      description: rawBook.description,
      rating: rawBook.rating
    };
  }

  create(book: Book): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/book`,
      book,
      { responseType: 'text' }
    );
  }

  update(isbn: string, book: Book): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/book/${isbn}`,
      book,
      { responseType: 'text' }
    );
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books/search/${term}`).pipe(
      map(rawBooks => rawBooks ? rawBooks : []),
      map(rawBooks => rawBooks.map(
        rawBook => this.mapToBook(rawBook))
      )
    );
  }

  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen, fortgeschrittene Techniken...',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      },
      {
        isbn: '222',
        title: 'Vue.js',
        description: 'Neu, hip und total cool',
        rating: 4
      }
    ];
  }
}
