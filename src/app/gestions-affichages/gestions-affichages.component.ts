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
   absences: any;

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


  delete(idEcran: string,idPerson : string,idIndisponibilite : string, idSpecifique : string) {

    this.service.deleteEcranAbsence(idEcran,idPerson,idIndisponibilite,idSpecifique).subscribe();
  }

  deleteMessage(idEcran: any, idMessage: any) {
    this.service.deleteEcranMessage(idEcran,idMessage).subscribe();
  }

  deleteResultat(idEcran: any, idCours: any) {
    this.service.deleteEcranResultat(idEcran,idCours).subscribe();
  }
}
