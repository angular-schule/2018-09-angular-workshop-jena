import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/${isbn}`);
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