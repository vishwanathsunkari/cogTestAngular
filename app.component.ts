import { Component, OnInit } from '@angular/core';

import {IUser} from './user';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Users: IUser[];

  constructor(private appService: AppServiceService){}


ngOnInit(){
  this.appService.getUsers().subscribe(users=>{
    this.Users = users;
  })
}

  

}
