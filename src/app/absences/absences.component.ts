import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
   absence: any;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getAbsence();
  }

  getAbsence(){
    const response = this.service.getAbsences();
    response.subscribe(absence => this.absence = absence);
  }

  delete(indispo_id: any, idPerson: any, idSpecifique: any) {
this.service.deleteAbsence(idPerson,indispo_id,idSpecifique).subscribe()
  }
}
