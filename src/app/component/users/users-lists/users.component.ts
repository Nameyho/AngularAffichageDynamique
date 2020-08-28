import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../../../service/restapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-eleves',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {



   users: any;




  constructor(private service: RestapiService, private route: ActivatedRoute,private router: Router,  ) { }

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers() {
    const response = this.service.getUsers();
    response.subscribe(data => this.users = data);
  }



  delete(id :any) {
    this.service.deleteUser(id).subscribe().add();

  }

}
