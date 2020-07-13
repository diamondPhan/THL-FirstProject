import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagequestionService } from '../services/managequestion.service';
import { UserService } from '../services/user.service';
import { question } from '../model/question';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
getName:any;
  constructor(private route:ActivatedRoute,private managequestion:ManagequestionService,private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('displayName');
    this.getName=id;
    console.log(this.getName);
  }

  questions: question={
    ID:'',
    Author:this.getName,
    Post: '',
    Date:Date.now(),
    
  }
  // question.Author=this.displayName;
  onSubmit(){
 
      
      this.questions.ID='';
      this.questions.Author=this.getName;
      this.questions.Date=Date.now();
      this.managequestion.createQuestions(this.questions);
      this.questions.Post='';
      this.router.navigate(['/admin/main/',this.getName]);
    console.log(this.questions);
  }
}
