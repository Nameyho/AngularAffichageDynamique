import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ecranmessage} from '../../../model/ecranmessage';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
 ecran: Object;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router, ) { }

  messages:any
  idE: any;
  debut = 0;
  fin = 20;
  pagedebut = 1;
  precedent =false ;
  suivant = false;

  ngOnInit(): void {
    this.getMessages()
  this.getEcrans()
  }

  getMessages() {
    const response = this.service.getMessages();
    response.subscribe(message => this.messages = message,
      ()=>null,
      ()=> {
        if (this.fin <= this.messages.length) {
          this.suivant = true;
        }

      });
  }

  delete(idPerson: any) {



    this.service.deleteMessage(idPerson).subscribe();
  }
  getEcrans() {
    const response = this.service.getEcrans();
    response.subscribe(data => this.ecran = data);
  }

  Ajouter(idMessage: String) {
    let  idEcran = this.idE;
    this.service.addEcranMessage({idEcran,idMessage} as Ecranmessage).subscribe();
  }

  pagination(nombre : number) {


    this.debut = this.debut + (nombre * 20);
    this.fin = this.fin + (nombre * 20);
    if (nombre == -1) {
      this.pagedebut--
    } else {
      this.pagedebut++
    }

    if (this.pagedebut*20 > this.messages.length) {
      this.precedent = true;
    }else{
      this.precedent=false;
    }
    if (this.pagedebut < this.messages.length) {
      this.suivant = true;
    }else{
      this.suivant =false;
    }
  }}
