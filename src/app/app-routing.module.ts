import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CoursComponent} from './cours/cours.component';
import {CoursDetailsComponent} from './cours-details/cours-details.component';
import {ElevesComponent} from './eleves/eleves.component';
import {MessagesComponent} from './messages/messages.component';
import {AbsencesComponent} from './absences/absences.component';
import {ElevesResultatsComponent} from './eleves-resultats/eleves-resultats.component';
import {ElevesDetailsComponent} from './eleves-details/eleves-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'cours', component: CoursComponent},
    {path: 'detailscours/:id', component: CoursDetailsComponent},
    {path : 'detailseleve/:id', component: ElevesResultatsComponent},
    {path : 'eleves', component : ElevesComponent},
    {path: 'modifier/:id', component: ElevesDetailsComponent},
    {path : 'messages', component : MessagesComponent},
    {path : 'absences', component : AbsencesComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
