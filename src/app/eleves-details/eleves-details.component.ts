import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eleves-details',
  templateUrl: './eleves-details.component.html',
  styleUrls: ['./eleves-details.component.css']
})
export class ElevesDetailsComponent implements OnInit {

   person: any;
  constructor(private service: RestapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInfo();
  }


  getInfo(){
    const id = this.route.snapshot.params.id;
    this.service.getPersonid(id)
      .subscribe(person => this.person = person);
  }
}
