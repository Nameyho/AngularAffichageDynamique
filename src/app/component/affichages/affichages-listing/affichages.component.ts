import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ecran} from '../../../model/ecran';

@Component({
  selector: 'app-affichages',
  templateUrl: './affichages.component.html',
  styleUrls: ['./affichages.component.css']
})
export class AffichagesComponent implements OnInit {
   ecrans: any;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    this.getEcrans()
  }


  getEcrans(){
    const response = this.service.getEcrans();
    response.subscribe(data => this.ecrans = data);
  }

  save(nomEcran: string) {
this.service.addEcran({nomEcran} as Ecran).subscribe();
this.getEcrans();
  }

  supprimer(idEcran: any) {
    this.service.deleteEcran(idEcran).subscribe();
    this.getEcrans();
  }
}
