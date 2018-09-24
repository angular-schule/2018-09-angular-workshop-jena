import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FancyButtonComponent],
  exports: [FancyButtonComponent]
})
export class GeneralSharedModule { }
