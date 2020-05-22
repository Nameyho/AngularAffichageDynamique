import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RestapiService} from '../restapi.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptService implements HttpInterceptor{

  constructor() {
    }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

  console.log('interceptor');
  console.log(sessionStorage.getItem('username'));

    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')
        }
      });
    }
  return next.handle(req);
  }
}
