import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router, ) { }

  messages:any

  ngOnInit(): void {
    this.getMessages()
  }

  getMessages() {
    const response = this.service.getMessages();
    response.subscribe(message => this.messages = message);
  }

  delete(idPerson: any) {

  }
}
