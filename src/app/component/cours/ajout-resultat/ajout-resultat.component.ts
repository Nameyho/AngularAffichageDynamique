import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Resultat} from '../../../model/resultat';

@Component({
  selector: 'app-ajout-resultat',
  templateUrl: './ajout-resultat.component.html',
  styleUrls: ['./ajout-resultat.component.css']
})
export class AjoutResultatComponent implements OnInit {

  cours: any;
  persons : any;


  constructor(private service: RestapiService, private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.getInfoCours();
    this.getinfosetudiant();
  }

  getInfoCours(){
    const idCours = this.route.snapshot.params.id;
    this.service.getCoursid(idCours).subscribe(cours=>this.cours = cours )
  }

  getinfosetudiant(){
    this.service.getPersons().subscribe(persons=>this.persons = persons)
  }

  save(idPerson: string, resultat2: string, reussite2: string) {
    const cours_id = this.route.snapshot.params.id;
let reussite;
  if(reussite2 !="true" ){
    reussite = false;
  }else{
    reussite = true;
  }
let resultat = parseInt(resultat2);


  this.service.addResultat({cours_id,idPerson,reussite,resultat}as Resultat).subscribe()
  }
}
