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
import {PersonsComponent} from './persons/persons.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AbsencesComponent} from './absences/absences.component';
import {MessagesComponent} from './messages/messages.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonsResultatsComponent} from './persons-resultats/persons-resultats.component';
import {PersonsDetailsComponent} from './persons-details/persons-details.component';
import {MessagesCreationComponent} from './messages-creation/messages-creation.component';
import {NgxWigModule} from 'ngx-wig';
import {PersonsFormComponent} from './persons-form/persons-form.component';
import {MessagesModificationComponent} from './messages-modification/messages-modification.component';
import {AbsenceFormComponent} from './absence-form/absence-form.component';
import {IndisponibiliteComponent} from './indisponibilite/indisponibilite.component';
import {AbsenceUpdateFormComponent} from './absence-update-form/absence-update-form.component';
import {AjoutCoursComponent} from './ajout-cours/ajout-cours.component';
import {AjoutResultatComponent} from './ajout-resultat/ajout-resultat.component';
import {AffichageresultatComponent} from './affichageresultat/affichageresultat.component';
import {AffichageabsenceComponent} from './affichageabsence/affichageabsence.component';
import {AffichagemessageComponent} from './affichagemessage/affichagemessage.component';
import {AffichagesComponent} from './affichages/affichages.component';
import {GestionsAffichagesComponent} from './gestions-affichages/gestions-affichages.component';
import {RechercheComponent} from './recherche/recherche.component';


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
    PersonsFormComponent,
    MessagesModificationComponent,
    AbsenceFormComponent,
    IndisponibiliteComponent,
    AbsenceUpdateFormComponent,
    AjoutCoursComponent,
    AjoutResultatComponent,
    AffichageresultatComponent,
    AffichageabsenceComponent,
    AffichagemessageComponent,
    AffichagesComponent,
    GestionsAffichagesComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxWigModule,

],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptService, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
