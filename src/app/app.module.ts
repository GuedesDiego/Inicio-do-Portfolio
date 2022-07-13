import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import{HttpClientModule} from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AppRoutingModule } from './game-rota';
import { CarouselModule } from './carousel/carousel.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    GameDetailsComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    CarouselModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
