import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Absence} from '../absences/absence';

@Component({
  selector: 'app-absence-update-form',
  templateUrl: './absence-update-form.component.html',
  styleUrls: ['./absence-update-form.component.css']
})
export class AbsenceUpdateFormComponent implements OnInit {

  absence : any;
  persons: any;
  absences : any;
  constructor(private service: RestapiService, private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.getinfo();
    this.getAbsencesinfo();
    this.getPersoninfo();
  }

  private getinfo() {
    const indispo_id = this.route.snapshot.params.id1;
    const idPerson = this.route.snapshot.params.id2;
    const idSpecifique = this.route.snapshot.params.id3;
    this.service.getAbsenceByID(idPerson,indispo_id,idSpecifique).subscribe(absence => this .absence = absence);
  }

  public getPersoninfo(){
    this.service.getPersons()
      .subscribe(person => this.persons = person);
  }

  public getAbsencesinfo(){
    this.service.getIndisponibilite()
      .subscribe(absence => this.absences = absence);
  }

  update(idPerson: any, indispo_id: any, dateDebut: any, dateFin: any) {

  this.service.updateAbsence({idPerson,indispo_id,dateDebut,dateFin} as Absence,this.route.snapshot.params.id2,this.route.snapshot.params.id1,this.route.snapshot.params.id3).subscribe();
  }
}
