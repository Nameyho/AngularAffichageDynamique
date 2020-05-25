import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  cours: any;
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
    this.getCours();
  }
  getCours(){
    const response = this.service.getCours();
    response.subscribe(data => this.cours = data);
    console.log(response);
  }
}
