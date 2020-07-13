import { Component, OnInit } from '@angular/core';
import { question } from '../model/question';
import { ManagequestionService } from '../services/managequestion.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
 
  
  constructor(private managequestion:ManagequestionService,private router:Router, private userService:UserService) { }
  displayName:string="";
  ngOnInit(): void {
    this.userService.getCurrentUser()
    .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);

  console.log(this.displayName);
  }
  questions: question={
    ID:'',
    Author:this.displayName,
    Post: '',
    Date:Date.now(),
    
  }
  onSubmit(){
   
      this.managequestion.createQuestions(this.questions);
      this.questions.ID='';
      this.questions.Author=this.displayName;
      this.questions.Post='';
      this.questions.Date=Date.now();
      
      this.router.navigate(['/admin/main']);
    
  }
}
