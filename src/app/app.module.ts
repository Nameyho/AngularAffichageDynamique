import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptService} from './service/basic-auth-intercept.service';
import {CoursComponent} from './cours/cours.component';
import {CoursDetailsComponent} from './cours-details/cours-details.component';
import {PersonsComponent} from './listes/persons.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {AbsencesComponent} from './absences/absences.component';
import {MessagesComponent} from './messages/messages.component';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonsResultatsComponent} from './persons-resultats/persons-resultats.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PersonsDetailsComponent} from './persons-details/persons-details.component';
import { MessagesCreationComponent } from './messages-creation/messages-creation.component';
import {NgxWigModule} from 'ngx-wig';
import {MatSelectModule} from '@angular/material/select';
import { PersonsFormComponent } from './persons-form/persons-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CoursComponent,
    CoursDetailsComponent,
    PersonsComponent,
    AbsencesComponent,
    MessagesComponent,
    PersonsResultatsComponent,
    PersonsDetailsComponent,
    MessagesCreationComponent,
    PersonsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatTableModule,
    NgbModule,
    MatDialogModule,
    NgxWigModule,
    MatSelectModule,
    MatFormFieldModule

],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptService, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
