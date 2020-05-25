import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  public getPersons(){
    console.log(localStorage.getItem('authString'));
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/persons', {headers});
  }
  public getCours(){
    console.log(localStorage.getItem('authString'));
    const headers = new HttpHeaders(sessionStorage.getItem('authString'));
    return this.http.get('http://localhost:8080/cours', {headers});
  }
}
