import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
   idperson: any;
   resultat: any;

  constructor(private service: RestapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  obtenir(value: number) {
    this.service.findByNumeroUnique(value).subscribe(
        data => this.idperson = data,
        value=>console.log("erreur"),
        ()=>this.service.getResultatByPerson(this?.idperson[0]['idPerson']).subscribe(resultat => this.resultat = resultat));
  }
}
