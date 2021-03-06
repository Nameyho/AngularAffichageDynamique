import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {

   cours: any;
   resultat : any;
  constructor(private service: RestapiService, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.getInfo();
    this.getElevesresultat();
  }

  getInfo(){
    const id = this.route.snapshot.params.id;
    this.service.getCoursid(id)
      .subscribe(cours => this.cours = cours);
  }

  getElevesresultat(){
    const id = this.route.snapshot.params.id;
    this.service.getResultatByCours(id)
      .subscribe(resultat => this.resultat = resultat);
  }
}
