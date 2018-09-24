import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { GeneralSharedModule } from '../general-shared/general-shared.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    GeneralSharedModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  exports: [DashboardComponent] // kann später wieder weg
})
export class BooksModule { }
