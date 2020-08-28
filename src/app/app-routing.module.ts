import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {CoursComponent} from './component/cours/cours-lists/cours.component';
import {CoursDetailsComponent} from './component/cours/cours-details/cours-details.component';
import {PersonsComponent} from './component/persons/persons-lists/persons.component';
import {MessagesComponent} from './component/messages/messages-list/messages.component';
import {AbsencesComponent} from './component/absences/absences-list/absences.component';
import {PersonsResultatsComponent} from './component/persons/persons-resultats/persons-resultats.component';
import {PersonsDetailsComponent} from './component/persons/persons-details/persons-details.component';
import {MessagesCreationComponent} from './component/messages/messages-creation/messages-creation.component';
import {PersonsFormComponent} from './component/persons/persons-form/persons-form.component';
import {MessagesModificationComponent} from './component/messages/messages-modification/messages-modification.component';
import {AbsenceFormComponent} from './component/absences/absence-form/absence-form.component';
import {AbsenceUpdateFormComponent} from './component/absences/absence-update-form/absence-update-form.component';
import {AjoutCoursComponent} from './component/cours/ajout-cours/ajout-cours.component';
import {AjoutResultatComponent} from './component/cours/ajout-resultat/ajout-resultat.component';


import {AffichageresultatComponent} from './component/affichages/affichageresultat/affichageresultat.component';


import {AffichageabsenceComponent} from './component/affichages/affichageabsence/affichageabsence.component';
import {AffichagemessageComponent} from './component/affichages/affichagemessage/affichagemessage.component';
import {AffichagesComponent} from './component/affichages/affichages-listing/affichages.component';
import {GestionsAffichagesComponent} from './component/gestions-affichages/gestions-affichages.component';
import {RechercheComponent} from './component/recherche/recherche.component';
import {UsersComponent} from './component/users/users-lists/users.component';
import {UsersFormcomponent} from './component/users/users-form/users-formcomponent';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'resultat', component: RechercheComponent},
  {path : 'affichageresultat/:id', component : AffichageresultatComponent},
  {path : 'affichageabsences/:id',component : AffichageabsenceComponent},
  {path : 'affichagemessage/:id', component : AffichagemessageComponent},
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'cours', component: CoursComponent},
    {path: 'detailscours/:id', component: CoursDetailsComponent},
    {path : 'detailseleve/:id', component: PersonsResultatsComponent},
    {path : 'eleves', component : PersonsComponent},
    {path: 'modifier/:id', component: PersonsDetailsComponent},
    {path : 'messages', component : MessagesComponent},
    {path : 'absences', component : AbsencesComponent},
    {path : 'creationmessage', component : MessagesCreationComponent},
    {path : 'formeleve', component: PersonsFormComponent},
    {path : 'modificationmessage/:id', component : MessagesModificationComponent},
    {path : 'creationabsence', component : AbsenceFormComponent},
    {path : 'modificationabsence/:id1/:id2/:id3', component : AbsenceUpdateFormComponent},
    {path : 'ajoutcours',component : AjoutCoursComponent},
    {path : 'ajoutresultat/:id', component : AjoutResultatComponent },
    {path : 'affichages', component :AffichagesComponent},
    {path : 'gestions/:id', component :GestionsAffichagesComponent},
    {path : 'users', component :UsersComponent},
    {path : 'userform', component :UsersFormcomponent},

  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
