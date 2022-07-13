import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[CarouselComponent]
})
export class CarouselModule { }
