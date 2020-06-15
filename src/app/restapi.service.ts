import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Eleve} from './eleves/eleve';


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

    return this.http.get('http://localhost:8080/resource', {headers});
  }

  public getPersons(): Observable<Eleve>{

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get<Eleve>('http://localhost:8080/persons', {headers});
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
    return this.http.get(('http://localhost:8080/persons/').concat(id), {headers});
  }

  public addEleve(eleve: Eleve): Observable<Eleve>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.post<Eleve>( 'http://localhost:8080/persons' , eleve, {headers});
  }

  public updateEleve( eleve: Eleve, id:any): Observable<Eleve>{
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.put<Eleve>( 'http://localhost:8080/persons/'.concat(id) , eleve, {headers});
  }
  public deleteEleve(id:any){
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.delete(('http://localhost:8080/persons/').concat(id), {headers});
  }

  public getMessages(){

    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/messages', {headers});
  }

}
