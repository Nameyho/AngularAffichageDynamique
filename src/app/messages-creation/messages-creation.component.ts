import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-creation',
  templateUrl: './messages-creation.component.html',
  styleUrls: ['./messages-creation.component.css']
})
export class MessagesCreationComponent implements OnInit {
  contenu: any;
  titreMessage: any;

  constructor() { }

  ngOnInit(): void {
  }

  valider() {
    if(!(this.contenu == null && this.titreMessage ==null)){
      console.log(this.contenu)
      console.log(this.titreMessage)
      console.log(localStorage.getItem("username"))
      console.log(Date.now())
    }
  }

  annuler() {

  }
}

