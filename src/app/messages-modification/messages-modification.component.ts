import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Message} from '../messages/message';

@Component({
  selector: 'app-messages-modification',
  templateUrl: './messages-modification.component.html',
  styleUrls: ['./messages-modification.component.css']
})
export class MessagesModificationComponent implements OnInit {
  constructor(private service: RestapiService, private route: ActivatedRoute,private router : Router) { }

  message: any;
  contenu: any;
  titreMessage: any;
  ngOnInit(): void {
    this.getInfo();

  }

  getInfo(){
    const id = this.route.snapshot.params.id;
    this.service.getMessageByID(id)
      .subscribe(message => this.message = message);

  }

  update(titreMessage: String, contenu: String) {

      const id = this.route.snapshot.params.id;

      console.log()

      const nomPerson = localStorage.getItem('username');
      const createdDate = Date.now().toString();


      this.service.updateMessage({contenu,titreMessage, createdDate, nomPerson} as Message,id).subscribe();

   // this.router.navigate(["./home/eleves"]);
  }

  goBack() {
    this.router.navigate(["./home/messages"]);
  }}
