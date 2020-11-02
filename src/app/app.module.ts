import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptService} from './service/basic-auth-intercept.service';
import {CoursComponent} from './component/cours/cours-lists/cours.component';
import {CoursDetailsComponent} from './component/cours/cours-details/cours-details.component';
import {PersonsComponent} from './component/persons/persons-lists/persons.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AbsencesComponent} from './component/absences/absences-list/absences.component';
import {MessagesComponent} from './component/messages/messages-list/messages.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonsResultatsComponent} from './component/persons/persons-resultats/persons-resultats.component';
import {PersonsDetailsComponent} from './component/persons/persons-details/persons-details.component';
import {MessagesCreationComponent} from './component/messages/messages-creation/messages-creation.component';
import {NgxWigModule} from 'ngx-wig';
import {PersonsFormComponent} from './component/persons/persons-form/persons-form.component';
import {MessagesModificationComponent} from './component/messages/messages-modification/messages-modification.component';
import {AbsenceFormComponent} from './component/absences/absence-form/absence-form.component';
import {IndisponibiliteComponent} from './component/indisponibilite/indisponibilite.component';
import {AbsenceUpdateFormComponent} from './component/absences/absence-update-form/absence-update-form.component';
import {AjoutCoursComponent} from './component/cours/ajout-cours/ajout-cours.component';
import {AjoutResultatComponent} from './component/cours/ajout-resultat/ajout-resultat.component';
import {AffichageresultatComponent} from './component/affichages/affichageresultat/affichageresultat.component';
import {AffichageabsenceComponent} from './component/affichages/affichageabsence/affichageabsence.component';
import {AffichagemessageComponent} from './component/affichages/affichagemessage/affichagemessage.component';
import {AffichagesComponent} from './component/affichages/affichages-listing/affichages.component';
import {GestionsAffichagesComponent} from './component/affichages/gestions-affichages/gestions-affichages.component';
import {RechercheComponent} from './component/recherche/recherche.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {UsersFormcomponent} from './component/users/users-form/users-formcomponent';
import {UsersComponent} from './component/users/users-lists/users.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


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
    RechercheComponent,
    UsersFormcomponent,
    UsersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxWigModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,


  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptService, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
