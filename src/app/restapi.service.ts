import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){

    const headers = new HttpHeaders({Authorization : 'basic  ' + btoa(username + ':' + password)});

    console.log(headers);
    sessionStorage.setItem('username', username);
    let authString = 'Basic ' + btoa(username + ':' + password);
    sessionStorage.setItem('basicauth', authString);

    return this.http.get('http://localhost:8080/persons', {headers});
  }

  public getPersons(username: string, password: string){


    const headers = new HttpHeaders({Authorization : 'basic' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8080/persons', {headers, responseType: 'text' as 'json'});
  }
}