import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {Cours} from '../../../model/cours';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-ajout-cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.css']
})
export class AjoutCoursComponent implements OnInit {

  constructor(private service: RestapiService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }




  save(name: string, datedebut: string, datefin: string) {


  this.service.addCours({name,datedebut,datefin}as Cours ).subscribe(
  data => null,
    ()=> window.alert("Infos Manquantes"),
    ()=> this.router.navigate(['/home/cours'])
  );


  }

}

