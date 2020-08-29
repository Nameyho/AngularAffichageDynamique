import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from '../../../model/users';

@Component({
  selector: 'app-eleves-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormcomponent implements OnInit {




  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {

  }

 save(username :string,password :string) {

    this.service.addUser({username,password} as Users).subscribe(
      data => null,
      ()=> window.alert("Infos Manquantes"),
      ()=> this.router.navigate(['/home/users'])
    );

  }



}
