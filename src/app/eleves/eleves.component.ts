import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  person: any;
  constructor(private service: RestapiService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getPerson();
  }
  getPerson(){
    const response = this.service.getPersons();
    response.subscribe(data => this.person = data);
  }
}
