import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-affichagemessage',
  templateUrl: './affichagemessage.component.html',
  styleUrls: ['./affichagemessage.component.css']
})
export class AffichagemessageComponent implements OnInit {
  messages: any;
  message: any;
  page= 0;
  debut = 0;
  fin = 1;

  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.animationMessage()
  }

  animationMessage() {
    const id = this.route.snapshot.params.id;
    const response = this.service.getEcransmessage(id);
    response.subscribe(data => this.messages = data,
      () => console.log("Erreur de chargement"),
      () => (this.boucle()));
  }

  boucle(){

    const id = this.route.snapshot.params.id;
    if(this?.messages[this?.debut]?.idMessage != undefined){
      const response = this?.service?.getMessageByID(this?.messages[this?.debut]?.idMessage);
      response.subscribe(data => this.message = data);
    }
    this.page++;


    const interval = setInterval(

      () => {


        if(this?.messages[this?.debut]?.idMessage != undefined){
          const response = this?.service?.getMessageByID(this?.messages[this?.debut]?.idMessage);
          response.subscribe(data => this.message = data);
        }
        this.page++;


        if ((this.messages?.length  - this.fin)<0 ) {
          this.debut = 0;
          this.fin = 1;


          clearInterval(interval);


          if(this.route.snapshot.params.ecran != undefined){
            console.log("écran unique detecté , rafraichissement de la page")
            this.animationMessage();
          }else{
            setTimeout(()=>this.router.navigate(["/affichageresultat/".concat(id)]),15000)
          }

        }
        this.debut++;
        this.fin ++;
      }
      , 5000);

  }


}
