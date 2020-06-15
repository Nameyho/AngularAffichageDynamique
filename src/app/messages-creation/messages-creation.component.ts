import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-creation',
  templateUrl: './messages-creation.component.html',
  styleUrls: ['./messages-creation.component.css']
})
export class MessagesCreationComponent implements OnInit {
  text1: "test";

  constructor() { }

  ngOnInit(): void {
  }

  valider() {
    console.log(this.text1)
  }
}

