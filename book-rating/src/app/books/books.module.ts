import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { GeneralSharedModule } from '../general-shared/general-shared.module';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    GeneralSharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent
  ],
  exports: [DashboardComponent] // kann später wieder weg
})
export class BooksModule { }
