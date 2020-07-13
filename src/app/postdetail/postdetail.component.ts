import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { question } from '../model/question';
import { ManagequestionService } from '../services/managequestion.service';
import { Observable } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';
import * as firebase from 'firebase';
import { ManagereplyService } from '../services/managereply.service';
import { reply } from '../model/replylist';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
questionlist:question[];
temp:any;
getID:any;
authortemp:any;
posttemp:any;
datetemp:any;
test:any;
itemToView: any;
getName:any;
  constructor(private route:ActivatedRoute, private router:Router, private managequestion:ManagequestionService, private managereplyService:ManagereplyService) { }

  ngOnInit(): void {
    // debugger
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getID=id;
    let name = this.route.snapshot.paramMap.get('getName');
    console.log(name);
    this.getName=name;
    
    this.temp=this.managequestion.getDetailQuestion(this.getID).subscribe(data => {
      console.log(data);
      this.test= JSON.stringify(data);
      this.questionlist=JSON.parse(this.test);
      this.authortemp=this.questionlist["Author"];
      this.datetemp=this.questionlist["Date"];
      this.posttemp=this.questionlist["Post"];
    });
    
  }
  replies: reply={
    questionID:this.getID,
    Author:this.getName,
    Post: '',
    Date:Date.now(),
    
  }
  onSubmit(){
 
      this.replies.questionID=this.getID;
      this.replies.Author=this.getName;
      this.replies.Date=Date.now();
      this.managereplyService.createReply(this.replies);
      this.replies.Post='';
      this.router.navigate(['/admin/postdetail/',this.getID,this.getName]);
    console.log(this.replies);
  }

}



