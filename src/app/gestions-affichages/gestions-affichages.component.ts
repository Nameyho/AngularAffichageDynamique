import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gestions-affichages',
  templateUrl: './gestions-affichages.component.html',
  styleUrls: ['./gestions-affichages.component.css']
})
export class GestionsAffichagesComponent implements OnInit {
  ecran: any;
  resultat : any;
  messages: any;
   absences: Object;

  constructor(private service: RestapiService, private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.getEcran();
    this.getInfoEcranResultat();
    this.getInfoEcranMessage();
    this.getInfoEcranABsence();
  }


  getEcran() {
    const id = this.route.snapshot.params.id;
    const response = this.service.getEcranByID(id);
    response.subscribe(data => this.ecran = data);
  }

  getInfoEcranResultat() {
    const id = this.route.snapshot.params.id;
    const response = this.service.getEcransresultat(id);
    response.subscribe(data => this.resultat = data);

  }

  getInfoEcranMessage(){
    const id = this.route.snapshot.params.id;
    const response = this.service.getEcransmessage(id);
    response.subscribe(data => this.messages = data);
  }

  getInfoEcranABsence(){
    const id = this.route.snapshot.params.id;
    const response = this.service.getecranAbsence(id);
    response.subscribe(data => this.absences = data);
  }


}
