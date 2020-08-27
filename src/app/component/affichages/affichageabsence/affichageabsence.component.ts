import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-affichageabsence',
  templateUrl: './affichageabsence.component.html',
  styleUrls: ['./affichageabsence.component.css']
})
export class AffichageabsenceComponent implements OnInit {

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router) {
  }

  debut = 0;
  fin = 15;
  absence: any;
  page = 1;
  ngOnInit(): void {
    this.animationAbsence();

  }
  animationAbsence() {
    const id = this.route.snapshot.params.id;
    const response = this.service.getecranAbsence(id);
    response.subscribe(data => this.absence = data,
      ()=>console.log("Erreur chargement données absence"),
      ()=>affichage(this.fin,this.debut,this.page,this.absence,this.route,this.router));
  }}

  function affichage(fin: number, debut: number,page:any,absence:any,route:any,router) {

  const interval = setInterval(
      () => {
        page++;
        debut = debut + 15;
        fin = fin + 15;
        if (((absence?.length - fin) < 0)) {
          const id = route.snapshot.params.id;
          setTimeout(()=>router.navigate(["/affichagemessage/".concat(id)]),5000)
          clearInterval(interval);
        }
      }
      , 5000);
  }
