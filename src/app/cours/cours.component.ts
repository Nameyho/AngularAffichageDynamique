import {Component, OnInit, ViewChild} from '@angular/core';
import {RestapiService} from '../restapi.service';
import {Ecranresultat} from './ecranresultat';
import {animation} from '@angular/animations';





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
  fin=  1;






  constructor(private service: RestapiService) { }

  ngOnInit(): void {
    this.getCours();
    this.getEcrans();



  }


  getCours() {
    const response = this.service.getCours();
    response.subscribe(data => this.cours = data);
  }

  getEcrans() {
    const response = this.service.getEcrans();
    response.subscribe(data => this.ecran = data);
  }

  Ajouter(idCours: string) {

   let  idEcran = this.idE;
   this.service.addEcranResultat({idEcran,idCours} as Ecranresultat).subscribe();

  }




}
