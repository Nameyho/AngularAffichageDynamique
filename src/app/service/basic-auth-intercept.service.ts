import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptService implements HttpInterceptor{

  constructor() {
    }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('username') && localStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('basicauth')
        }
      });
    }
    return next.handle(req);
  }
}
