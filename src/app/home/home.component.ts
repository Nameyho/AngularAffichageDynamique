import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: any;
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }





}
