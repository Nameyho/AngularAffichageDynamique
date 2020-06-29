import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Persons} from '../persons/persons';

@Component({
  selector: 'app-eleves-details',
  templateUrl: './persons-details.component.html',
  styleUrls: ['./persons-details.component.css']
})
export class PersonsDetailsComponent implements OnInit {

  constructor(private service: RestapiService, private route: ActivatedRoute,private router : Router) { }

  person: any;
  ngOnInit(): void {
    this.getInfo();

  }

  getInfo(){
    const id = this.route.snapshot.params.id;
    this.service.getPersonid(id)
      .subscribe(person => this.person = person);
  }

  update(nom: string, prenom: string, email: string , dateAnniversaire: string) {
    const id = this.route.snapshot.params.id;
    this.service.updateEleve({nom, prenom, email, dateAnniversaire} as Persons,id).subscribe();
    this.router.navigate(["./home/eleves"]);
  }

  goBack() {
    //com useless pour commit
    this.router.navigate(["./home/eleves"]);
  }}
