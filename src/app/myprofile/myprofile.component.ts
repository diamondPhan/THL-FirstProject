import { Component, OnInit } from '@angular/core';
import { account } from '../model/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
acc:account[];
  getName: string;
  getEmail: string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get('displayName');
    console.log(name);
    this.getName=name;
    let email=this.route.snapshot.paramMap.get('displayEmail');
    this.getEmail=email;
  }

}
