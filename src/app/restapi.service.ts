import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persons} from './persons/persons';
import {Message} from './messages/message';
import {Absence} from './absences/absence';
import {Indisponibilite} from './indisponibilite/Indisponibilite';







@Injectable({
  providedIn: 'root'
})
export class RestapiService {



  constructor(private http: HttpClient) { }

  public login(username: string, password: string){

    const headers = new HttpHeaders({Authorization : 'Basic  ' + btoa(username + ':' + password)});
    localStorage.setItem('username', username);

    let authString = 'Basic ' + btoa(username + ':' + password);
    localStorage.setItem('basicauth', authString);

    return this.http.get('http://localhost:8080/users/login', {headers});
  }

  public getPersons(): Observable<Persons>{

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get<Persons>('http://localhost:8080/persons', {headers});
  }
  public getCours(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/cours', {headers});
  }

  public getCoursid(id: any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(('http://localhost:8080/cours/').concat(id), {headers});
  }

  public getPersonid(id: any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(('http://localhost:8080/persons/').concat(id), {headers});
  }

  public  getResultatByPerson(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(('http://localhost:8080/resultat/').concat(id), {headers});
  }

  public addEleve(eleve: Persons): Observable<Persons>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Persons>( 'http://localhost:8080/persons' , eleve, {headers});
  }

  public updateEleve(eleve: Persons, id:any): Observable<Persons>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.put<Persons>( 'http://localhost:8080/persons/'.concat(id) , eleve, {headers});
  }
  public deleteEleve(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(('http://localhost:8080/persons/').concat(id), {headers});
  }

  public getMessages(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/messages', {headers});
  }

  public addMessage(Message: Message): Observable<Message>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Message>( 'http://localhost:8080/messages' , Message, {headers});
  }

  public deleteMessage(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(('http://localhost:8080/messages/').concat(id), {headers});
  }


  public getRoles(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/roles', {headers});
  }

  public getPersonbyRoles(id:any) : Observable<Persons>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get<Persons>('http://localhost:8080/persons/roles/'.concat(id), {headers});
  }

  public updateMessage (message: Message, id:any): Observable<Message> {
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));

    return this.http.put<Message>( 'http://localhost:8080/messages/'.concat(id) , message, {headers});
  }
  public getMessageByID(id: any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(('http://localhost:8080/messages/').concat(id), {headers});
  }

  public getAbsences(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/absences', {headers});
  }
  public getAbsenceByID(idperson: any,idindispo : any,idspecifique : any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(('http://localhost:8080/absences/').concat(idperson+"/"+idindispo+"/"+idspecifique), {headers});
  }

  public updateAbsence (absence: Absence, idperson: any,idindispo : any,idspecifique : any): Observable<Absence> {
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));

    return this.http.put<Absence>( 'http://localhost:8080/absences/'.concat(idperson+"/"+idindispo+"/"+idspecifique) , absence, {headers});
  }

  public deleteAbsence( idperson: any,idindispo : any,idspecifique : any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(('http://localhost:8080/absences/').concat(idperson+"/"+idindispo+"/"+idspecifique), {headers});
  }

  public addAbsence(absence: Absence): Observable<Absence>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Absence>( 'http://localhost:8080/absences' , absence, {headers});
  }

  public getIndisponibilite(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/indisponibilite', {headers});
  }

  public getIndisponibiliteByID(idPerson: any,idIndispo : any ,idCours :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get(('http://localhost:8080/indisponibilite/').concat(idPerson + "/" + idIndispo +"/" + idCours), {headers});
  }

  public updateIndisponibilite (indisponibilite: Indisponibilite, idPerson: any,idIndispo : any ,idCours :any): Observable<Indisponibilite> {
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));

    return this.http.put<Indisponibilite>( 'http://localhost:8080/indisponibilite/'.concat(idPerson + "/" + idIndispo +"/" + idCours) , indisponibilite, {headers});
  }

  public deleteindisponibilite(idPerson: any,idIndispo : any ,idCours :any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(('http://localhost:8080/indindisponibilite/').concat(idPerson + "/" + idIndispo +"/" + idCours), {headers});
  }

  public addindisponibilite(indisponibilite: Indisponibilite): Observable<Indisponibilite>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Message>( 'http://localhost:8080/indisponibilite' , indisponibilite, {headers});
  }


}
