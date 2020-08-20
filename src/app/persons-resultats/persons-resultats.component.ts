import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../service/restapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eleves-details',
  templateUrl: './persons-resultats.component.html',
  styleUrls: ['./persons-resultats.component.css']
})
export class PersonsResultatsComponent implements OnInit {

   person: any;
   resultat : any;
  constructor(private service: RestapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInfo();
    this.getresultatbyPerson();
  }


  getInfo(){
    const id = this.route.snapshot.params.id;
    this.service.getPersonid(id)
      .subscribe(person => this.person = person);
  }

  getresultatbyPerson(){
    const id = this.route.snapshot.params.id;
    this.service.getResultatByPerson(id)
      .subscribe(resultat => this.resultat = resultat);
  }

}
