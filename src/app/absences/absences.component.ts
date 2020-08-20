import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ecranabsence} from './ecranabsence';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
   absence: any;
  ecran: any;
  idE: any;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getAbsence();
    this.getEcrans();
  }

  getAbsence(){
    const response = this.service.getAbsences();
    response.subscribe(absence => this.absence = absence);
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
}
