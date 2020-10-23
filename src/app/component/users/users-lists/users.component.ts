import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-eleves',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {



   users: any;
  debut = 0;
  fin=  20;
  pagedebut = 1;
  precedent =false ;
  suivant = false;


  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,  ) { }

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers() {
    const response = this.service.getUsers();
    response.subscribe(data => this.users = data,
      ()=>null,
      ()=> {
        if (this.fin <= this.users.length) {
          this.suivant = true;
        }

      })}



  delete(id :any) {
    this.service.deleteUser(id).subscribe().add();

  }
  pagination(nombre : number) {


    this.debut = this.debut + (nombre * 20);
    this.fin = this.fin + (nombre * 20);
    if (nombre == -1) {
      this.pagedebut--
    } else {
      this.pagedebut++
    }

    if (this.pagedebut *20> this.users.length) {
      this.precedent = true;
    }else{
      this.precedent=false;
    }
    if (this.pagedebut < this.users.length) {
      this.suivant = true;
    }else{
      this.suivant =false;
    }
  }


}
