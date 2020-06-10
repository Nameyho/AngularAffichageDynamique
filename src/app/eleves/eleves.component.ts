import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Eleve} from './eleve';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {



   eleve: Eleve;




  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,  ) { }

  ngOnInit(): void {
    this.getPerson();
  }
  getPerson() {
    const response = this.service.getPersons();
    response.subscribe(eleve => this.eleve = eleve);
  }



  save(nom: string, prenom: string, email: string , dateAnniversaire: string) {

 this.service.addEleve({nom, prenom, email, dateAnniversaire} as Eleve).subscribe();

}

  delete(id :any) {
    this.service.deleteEleve(id).subscribe().add();

  }
}
