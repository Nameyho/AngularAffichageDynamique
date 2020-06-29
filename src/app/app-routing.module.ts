import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CoursComponent} from './cours/cours.component';
import {CoursDetailsComponent} from './cours-details/cours-details.component';
import {PersonsComponent} from './persons/persons.component';
import {MessagesComponent} from './messages/messages.component';
import {AbsencesComponent} from './absences/absences.component';
import {PersonsResultatsComponent} from './persons-resultats/persons-resultats.component';
import {PersonsDetailsComponent} from './persons-details/persons-details.component';
import {MessagesCreationComponent} from './messages-creation/messages-creation.component';
import {PersonsFormComponent} from './persons-form/persons-form.component';
import {MessagesModificationComponent} from './messages-modification/messages-modification.component';
import {AbsenceFormComponent} from './absence-form/absence-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
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
    {path : 'creationabsence', component : AbsenceFormComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
