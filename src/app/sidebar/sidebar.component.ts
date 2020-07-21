import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventEmitter } from 'protractor';
import { emit } from 'process';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  afAuthService: any;
  displayName:string="";
  passwordtemp:string="";
  temp:any
  displayEmail:any;
  public show:boolean=true;
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
    .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
  console.log(this.displayName);
  this.userService.getCurrentUser()
    .then(user=> this.displayEmail = user.displayEmail!=null? user.displayEmail: user.email);
console.log(this.displayEmail);
  }
  Logout(){
    this.userService.logout();
    location.href="/login";
  }
  toggle(){
    this.show=!this.show;
  }


  
}
