import { Component, OnInit, Input } from '@angular/core';
import { question } from '../model/question';
import { ManagequestionService } from '../services/managequestion.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component'
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})

export class AddpostComponent implements OnInit {
 
  
  constructor(private managequestion:ManagequestionService,private router:Router, private userService:UserService) { }
  ngOnInit(): void {
  }
  questions: question={
    ID:'',
    Author:'',
    Post: '',
    Date:Date.now(),
    
  }
  // question.Author=this.displayName;
  onSubmit(){
 
      this.managequestion.createQuestions(this.questions);
      this.questions.ID='';
      this.questions.Author='';
      this.questions.Post='';
      this.questions.Date=Date.now();
      this.router.navigate(['/admin/main']);
    
  }
}
