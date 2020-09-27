import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {Ecranresultat} from '../../../model/ecranresultat';


@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  cours;
  ecran :any;
  idE: any;
  debut = 0;
  fin=  20;
  pagedebut = 1;
  precedent =false ;
  suivant = false;

constructor(private service: RestapiService) { }

  ngOnInit(): void {
    this.getCours();
    this.getEcrans();
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
    if (this.pagedebut < this.cours.length) {
      this.suivant = true;
    }else{
      this.suivant =false;
    }
  }

  getCours() {
    const response = this.service.getCours();
    response.subscribe(data => this.cours = data,
      ()=>null,
      ()=> {
        if (this.fin <= this.cours.length) {
          this.suivant = true;
        }

  })}

  getEcrans() {
    const response = this.service.getEcrans();
    response.subscribe(data => this.ecran = data);
  }

  Ajouter(idCours: string) {

   let  idEcran = this.idE;
   this.service.addEcranResultat({idEcran,idCours} as Ecranresultat).subscribe();

  }




}
