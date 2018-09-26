import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

}
