import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Persons} from './persons';

@Component({
  selector: 'app-eleves',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit {



   eleve: Persons;
   roles: any;
  idRole: String;




  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,  ) { }

  ngOnInit(): void {
    this.getPerson();
    this.getRoles();
  }
  getPerson() {
    const response = this.service.getPersons();
    response.subscribe(eleve => this.eleve = eleve);
  }


  private getRoles() {
    const response = this.service.getRoles();
    response.subscribe(role => this.roles = role);
  }


  delete(id :any) {
    this.service.deleteEleve(id).subscribe().add();

  }

  filtrage(idRoles: String) {
    const response = this.service.getPersonbyRoles(idRoles);
    response.subscribe(eleve => this.eleve = eleve);
  }
}
