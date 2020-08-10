import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import set = Reflect.set;

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

    const response = this.service.getAbsences();
    response.subscribe(data => this.absence = data);
    const id = this.route.snapshot.params.id;
    const interval = setInterval(

      () => {
        this.page++;
        this.debut= this.debut+15;
        this.fin = this.fin +15;
        if ((this.absence?.length-this.fin)<0 ) {
          setTimeout(()=>this.router.navigate(["/affichagemessage/".concat(id)]),5000)

          clearInterval(interval);

        }

      }
      , 5000);

  }
}
