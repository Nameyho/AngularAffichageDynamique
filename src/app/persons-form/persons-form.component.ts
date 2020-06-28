import { Component, OnInit } from '@angular/core';
import {Persons} from '../listes/persons';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-eleves-form',
  templateUrl: './persons-form.component.html',
  styleUrls: ['./persons-form.component.css']
})
export class PersonsFormComponent implements OnInit {

  roles: any;
  idRole: any;




  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    this.getRoles();
  }

  save(nom: string, prenom: string, email: string , dateAnniversaire: string, idRole :any) {

    this.service.addEleve({nom, prenom, email, dateAnniversaire,idRole} as Persons).subscribe();

  }

  private getRoles() {
    const response = this.service.getRoles();
    response.subscribe(role => this.roles = role);
  }
}
