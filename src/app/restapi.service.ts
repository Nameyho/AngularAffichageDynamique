import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persons} from './persons/persons';
import {Message} from './messages/message';
import {Absence} from './absences/absence';
import {Indisponibilite} from './indisponibilite/Indisponibilite';
import {Cours} from './cours/cours';
import {Resultat} from './ajout-resultat/resultat';
import {Ecranresultat} from './cours/ecranresultat';
import {Ecran} from './affichages/ecran';
import {Ecranabsence} from './absences/ecranabsence';
import {Ecranmessage} from './messages/ecranmessage';







@Injectable({
  providedIn: 'root'
})
export class RestapiService {

   url : String = "https://back-end-springboot.herokuapp.com";

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){

    const headers = new HttpHeaders({Authorization : 'Basic  ' + btoa(username + ':' + password)});
    localStorage.setItem('username', username);

    let authString = 'Basic ' + btoa(username + ':' + password);
    localStorage.setItem('basicauth', authString);

    return this.http.get(this.url.concat('/users/login'), {headers});
  }

  public getPersons(): Observable<Persons>{

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get<Persons>(this.url.concat('/persons/'), {headers});
  }
  public getCours(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/cours/'), {headers});
  }

  public getCoursid(id: any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get((this.url.concat('/cours/' +id)), {headers});
  }

  public addCours(cours: Cours): Observable<Cours>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Cours>( this.url.concat('/cours') , cours, {headers});
  }





  public getPersonid(id: any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get((this.url.concat('/persons/' +id)), {headers});
  }

  public  getResultatByPerson(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get((this.url.concat('/resultat/' +id)), {headers});
  }

  public addEleve(eleve: Persons): Observable<Persons>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Persons>( this.url.concat('/persons') , eleve, {headers});
  }

  public updateEleve(eleve: Persons, id:any): Observable<Persons>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.put<Persons>( this.url.concat(/persons/+id) , eleve, {headers});
  }
  public deleteEleve(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(( this.url.concat(/persons/+id)), {headers});
  }

  public getMessages(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/messages'), {headers});
  }

  public addMessage(Message: Message): Observable<Message>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Message>( this.url.concat('/messages'), Message, {headers});
  }

  public deleteMessage(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete((this.url.concat('/messages/')).concat(id), {headers});
  }


  public getRoles(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/roles'), {headers});
  }

  public getPersonbyRoles(id:any) : Observable<Persons>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get<Persons>(this.url.concat('/persons/roles/'+id), {headers});
  }

  public updateMessage (message: Message, id:any): Observable<Message> {
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.put<Message>( this.url.concat(/messages/+id) , message, {headers});
  }
  public getMessageByID(id: any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(( this.url.concat(/messages/+id)), {headers});
  }

  public getAbsences(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/absences'), {headers});
  }
  public getAbsenceByID(idperson: any,idindispo : any,idspecifique : any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/absences/'+idperson+"/"+idindispo+"/"+idspecifique), {headers});
  }

  public updateAbsence (absence: Absence, idperson: any,idindispo : any,idspecifique : any): Observable<Absence> {
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));

    return this.http.put<Absence>( this.url.concat('/absences/'+idperson+"/"+idindispo+"/"+idspecifique), absence, {headers});
  }

  public deleteAbsence( idperson: any,idindispo : any,idspecifique : any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(this.url.concat('/absences/'+idperson+"/"+idindispo+"/"+idspecifique), {headers});
  }

  public addAbsence(absence: Absence): Observable<Absence>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Absence>( this.url.concat('/absences') , absence, {headers});
  }

  public getIndisponibilite(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/indisponibilite'), {headers});
  }

  public getIndisponibiliteByID(idPerson: any,idIndispo : any ,idCours :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/indisponibilite/'+idPerson + "/" + idIndispo +"/" + idCours), {headers});
  }

  public updateIndisponibilite (indisponibilite: Indisponibilite, idPerson: any,idIndispo : any ,idCours :any): Observable<Indisponibilite> {
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));

    return this.http.put<Indisponibilite>( this.url.concat('/indisponibilite/'+idPerson + "/" + idIndispo +"/" + idCours) , indisponibilite, {headers});
  }

  public deleteindisponibilite(idPerson: any,idIndispo : any ,idCours :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(this.url.concat('/indisponibilite/'+idPerson + "/" + idIndispo +"/" + idCours), {headers});
  }

  public addindisponibilite(indisponibilite: Indisponibilite): Observable<Indisponibilite>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Message>( this.url.concat('/indisponilite'), indisponibilite, {headers});
  }

  public  getResultatByCours(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/resultat/cours/'+id), {headers});
  }



  public addResultat(resultat: Resultat): Observable<Resultat>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Resultat>( this.url.concat('/resultat') , resultat, {headers});
  }

  //Service sur Ecran Resultat

  public getEcrans(){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/ecrans'), {headers});
  }

  public getEcransresultat(id :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/ecranresultat/' + id), {headers});
  }
  public getEcransmessage(id :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/ecranmessage/' + id), {headers});
  }

  public getecranAbsence(id :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(this.url.concat('/ecranabsence/' + id), {headers});
  }


  public addEcranResultat(ecranResultat : Ecranresultat): Observable<Ecranresultat>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Ecranresultat>(this.url.concat('/ecranresultat'), ecranResultat, {headers});
  }

  public addEcran(ecran: Ecran): Observable<Ecran>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Ecran>( this.url.concat('/ecrans') , ecran, {headers});
  }
  public addEcranAbsence(ecranAbsence : Ecranabsence): Observable<Ecranabsence>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Ecranabsence>(this.url.concat('/ecranabsence'), ecranAbsence, {headers});
  }

  public addEcranMessage(ecranmessage : Ecranmessage): Observable<Ecranresultat>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Ecranresultat>(this.url.concat('/ecranmessage'), ecranmessage, {headers});
  }

  public deleteEcran(id :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete<Ecranresultat>(this.url.concat('/ecrans/'.concat(id)), {headers});
}

  public getEcranByID(id :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get<Ecranresultat>(this.url.concat('/ecrans/'.concat(id)), {headers});
  }
}
