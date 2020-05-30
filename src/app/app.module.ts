import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptService} from './service/basic-auth-intercept.service';
import { CoursComponent } from './cours/cours.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { ElevesComponent } from './eleves/eleves.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { AbsencesComponent } from './absences/absences.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CoursComponent,
    CoursDetailsComponent,
    ElevesComponent,
    AbsencesComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,

],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
