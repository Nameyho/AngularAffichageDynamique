import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: any;
  constructor(private service: RestapiService, private router: Router) { }

  ngOnInit(): void {
  }


  doLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
