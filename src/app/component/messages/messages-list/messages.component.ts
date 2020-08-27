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

  ngOnInit(): void {
    this.getMessages()
  this.getEcrans()
  }

  getMessages() {
    const response = this.service.getMessages();
    response.subscribe(message => this.messages = message);
  }

  delete(idPerson: any) {
    console.log(idPerson)


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
}
