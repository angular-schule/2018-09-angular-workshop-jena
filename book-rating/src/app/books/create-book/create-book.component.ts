import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { map, distinctUntilChanged, debounceTime, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() create = new EventEmitter<Book>();

  bookForm: FormGroup;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });

    this.bookForm.valueChanges.pipe(
      map(value => value.title),
      distinctUntilChanged(),
      debounceTime(1000),
      filter(term => term.length >= 3),
      switchMap(term => this.bs.search(term))
    )
    .subscribe(e => console.log(e));
  }

  submitForm() {
    // Daten holen und Buch erzeugen
    const newBook: Book = {
      ...this.bookForm.value,
      rating: 1
    };

    // Event verschicken
    this.create.emit(newBook);

    this.bookForm.reset({
      title: '',
      isbn: '',
      description: ''
    });

  }


  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.invalid && control.dirty;
  }
  
  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.hasError(errorCode) && control.dirty;
  }

}
