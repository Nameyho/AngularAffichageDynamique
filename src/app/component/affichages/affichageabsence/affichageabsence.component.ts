import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-affichageabsence',
  templateUrl: './affichageabsence.component.html',
  styleUrls: ['./affichageabsence.component.css']
})
export class AffichageabsenceComponent implements OnInit {

  constructor(private service: RestapiService, private route: ActivatedRoute, private router: Router) {
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
      () => console.log("Erreur chargement données absence"),
      () => this.affichage(this.fin, this.debut, this.page, this.absence, this.route, this.router));
  }

  affichage(fin: number, debut: number, page: any, absence: any, route: any, router: any, ) {

    if (route.snapshot.params.ecran == "absences") {
      const interval = setInterval(
        () => {
          page++;
          debut = debut + 15;
          fin = fin + 15;
          if (((absence?.length - fin) < 0)) {
            const id = route.snapshot.params.id;

            console.log("écran unique detecté , rafraichissement de la page")
            this.animationAbsence()

          }
        }
        , 15000);

    } else {
      const interval = setInterval(
        () => {
          page++;
          debut = debut + 15;
          fin = fin + 15;
          if (((absence?.length - fin) < 0)) {
            const id = route.snapshot.params.id;


            clearInterval(interval);

            setTimeout(() => router.navigate(["/affichagemessage/".concat(id)]), 15000)
          }

        }
        , 15000);
    }


  }
}
