import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute} from '@angular/router';
import {CoursComponent} from '../cours/cours.component';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {

   cours: any;
  constructor(private service: RestapiService, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    const id = this.route.snapshot.params.id;
    console.log(id);
    this.service.getCoursid(id)
      .subscribe(cours => this.cours = cours);
  }

}
