import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent implements OnInit {
  afAuthService: any;
  displayName:string="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
					.then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
		
				console.log(this.displayName);
  }
  Logout(){
    this.userService.logout();
    location.href="/login";
  }
 
}
