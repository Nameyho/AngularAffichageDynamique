import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Absence} from '../../../model/absence';
import {Indisponibilite} from '../../../model/Indisponibilite';

@Component({
  selector: 'app-absence-form',
  templateUrl: './absence-form.component.html',
  styleUrls: ['./absence-form.component.css']
})
export class AbsenceFormComponent implements OnInit {
  persons: any;
  idPerson:any;
  absences :any;
  idAbsence :any;


  constructor(private service: RestapiService, private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.getPersoninfo();
    this.getAbsencesinfo();
  }

  public getPersoninfo(){
    this.service.getPersons()
      .subscribe(person => this.persons = person);
  }

  public getAbsencesinfo(){
    this.service.getIndisponibilite()
      .subscribe(absence => this.absences = absence);
  }

  save(idPerson: String, indispo_id: String, dateDebut: String, dateFin: String) {
    this.service.addAbsence({idPerson,indispo_id,dateDebut,dateFin}as Absence).subscribe(
      data => null,
      ()=> window.alert("Infos Manquantes"),
      ()=> this.router.navigate(['/home/absences'])
    )
  }

  AjouterMaladie(type: string) {
    this.service.addindisponibilite({type} as Indisponibilite) .subscribe(

    );

  }
}
