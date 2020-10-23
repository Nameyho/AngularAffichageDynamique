import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ecranabsence} from '../../../model/ecranabsence';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
   absence: any;
  ecran: any;
  idE: any;
  debut = 0 ;
  fin = 20;
  pagedebut = 1;
  precedent =false ;
  suivant = false;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getAbsence();
    this.getEcrans();
  }

  getAbsence(){
    const response = this.service.getAbsences();
    response.subscribe(absence => this.absence = absence,
      ()=>null,
      ()=> {
        if (this.fin <= this.absence.length) {
          this.suivant = true;
        }});
  }
  getEcrans() {
    const response = this.service.getEcrans();
    response.subscribe(data => this.ecran = data);
  }


  delete(indispo_id: any, idPerson: any, idSpecifique: any) {
this.service.deleteAbsence(idPerson,indispo_id,idSpecifique).subscribe()
  }

  Ajouter(idIndisponibilite: string, idPerson: string, idSpecifique: string) {

    let  idEcran = this.idE;
    this.service.addEcranAbsence({idEcran,idIndisponibilite,idPerson,idSpecifique} as Ecranabsence).subscribe();
  }


  pagination(nombre : number) {


    this.debut = this.debut + (nombre * 20);
    this.fin = this.fin + (nombre * 20);
    if (nombre == -1) {
      this.pagedebut--
    } else {
      this.pagedebut++
    }

    if (this.pagedebut*20 > this.absence.length) {
      this.precedent = true;
    }else{
      this.precedent=false;
    }
    if (this.pagedebut < this.absence.length) {
      this.suivant = true;
    }else{
      this.suivant =false;
    }
  }}
