import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-affichage',
  templateUrl: './affichageresultat.component.html',
  styleUrls: ['./affichageresultat.component.css']
})
export class AffichageresultatComponent implements OnInit {
  resultat: any;

    cours ;
   debut= 0;
   fin = 1;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.animationCours();
  }


  animationCours() {

    const response = this.service.getCours();
    response.subscribe(data => this.cours = data);

    const interval = setInterval(
      () =>{
        const response = this?.service.getResultatByCours(this?.cours[this?.debut]?.idCours);
        response.subscribe(data =>this.resultat = data)
        this.debut++,this.fin++;
        if(this.cours?.length<this.fin){
          this.debut=0;
          this.fin= 1;

           clearInterval(interval)
           setTimeout(()=>this.router.navigate(["/home/affichageabsences"]),1000)



      }



}
      , 1000);


  }



}
