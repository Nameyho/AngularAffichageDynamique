import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-affichage',
  templateUrl: './affichageresultat.component.html',
  styleUrls: ['./affichageresultat.component.css']
})
export class AffichageresultatComponent implements OnInit {
  resultat: any;
  nomCours : string;
    cours ;
   debut= 0;
   fin = 1;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.animationCours();
  }


  animationCours() {

    const id = this.route.snapshot.params.id;
    const response = this.service.getEcransresultat(id);
    response.subscribe(data => this.cours = data);
    const interval = setInterval(
      () =>{
        this.nomCours= this?.cours[this?.debut]?.nomCours;
        const response = this?.service.getResultatByCours(this?.cours[this?.debut]?.idCours);
        response.subscribe(data =>this.resultat = data)
        this.debut++,this.fin++;
        if(this.cours?.length<this.fin){
          this.debut=0;
          this.fin= 1;
          clearInterval(interval)
          setTimeout(()=>this.router.navigate(["/affichageabsences/".concat(id)]),5000)
        }}
      , 5000);
  }



}
