import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Message} from '../messages/message';
import {Persons} from '../persons/persons';
import {dateComparator} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools';
import {MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-messages-creation',
  templateUrl: './messages-creation.component.html',
  styleUrls: ['./messages-creation.component.css']
})
export class MessagesCreationComponent implements OnInit {
  contenu: any;
  titreMessage: any;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
  }

  valider() {
    if(!(this.contenu == undefined && this.titreMessage ==undefined)){

      const contenu =this.contenu;
      const titreMessage= this.titreMessage;
      const nomPerson = localStorage.getItem('username');
      const createdDate = Date.now().toString();


      this.service.addMessage({contenu,titreMessage, createdDate, nomPerson} as Message).subscribe();
    }
  }

  annuler() {
    this.router.navigate(["../home/messages"]);
  }
}

