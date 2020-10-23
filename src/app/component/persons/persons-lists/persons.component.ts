import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Persons} from '../../../model/persons';

@Component({
  selector: 'app-eleves',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  eleve: any;
  roles: any;
  idRole: String;
  debut = 0;
  fin = 20;
  pagedebut = 1;
  precedent = false;
  suivant = false;

  constructor(private service: RestapiService, private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.getPerson();
    this.getRoles();
  }

  getPerson() {
    const response = this.service.getPersons();
    response.subscribe(eleve => this.eleve = eleve,
      ()=>null,
      ()=> {
        if (this.fin <= this.eleve.length) {
          this.suivant = true;
        }

      })}


  private getRoles() {
    const response = this.service.getRoles();
    response.subscribe(role => this.roles = role);
  }


  delete(id: any) {
    this.service.deleteEleve(id).subscribe().add();

  }

  filtrage(idRoles: String) {
    const response = this.service.getPersonbyRoles(idRoles);
    response.subscribe(eleve => this.eleve = eleve);
  }

  filtragenom(nom: string) {
    const response = this.service.findUserByName(nom);
    response.subscribe(eleve => this.eleve = eleve)
  }

  pagination(nombre : number) {


    this.debut = this.debut + (nombre * 20);
    this.fin = this.fin + (nombre * 20);
    if (nombre == -1) {
      this.pagedebut--
    } else {
      this.pagedebut++
    }

    if (this.pagedebut > 1) {
      this.precedent = true;
    }else{
      this.precedent=false;

    }
    if ((this.pagedebut*20)  < this.eleve.length ) {

      console.log("true")
      console.log(this.pagedebut)
      console.log(this.eleve.length)
      this.suivant = true;

    }else{

      console.log("false")
      console.log(this.pagedebut)
      console.log(this.eleve.length)
      this.suivant =false;
    }
  }
}
