import { Component, OnInit } from '@angular/core';
import {ManagequestionService} from '../services/managequestion.service'
import { question } from '../model/question';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { reply } from '../model/replylist';
import { ManagereplyService } from '../services/managereply.service';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})

export class QuestionlistComponent implements OnInit {
  editState:boolean= false;
  questiontoEdit: any;

  constructor(private managereplyService:ManagereplyService,private managequestionService:ManagequestionService, private router:Router, private afs: AngularFirestore,private route:ActivatedRoute) { }
 questionlist: question[];
 questionDoc:AngularFirestoreDocument<question>;
 getID:string;
 getName:any;
  ngOnInit(): void {
    this.managequestionService.getQuestions().subscribe(data => {
      this.questionlist = data.map(e => {
        const data = e.payload.doc.data() as question;
        const id= e.payload.doc.id;
        return {
        id, ...data
        } 
      })
      console.log(this.questionlist);
      
    });
    let id = this.route.snapshot.paramMap.get('displayName');
    this.getName=id;
    console.log(this.getName);
    
  }
  
  get(){
    this.managequestionService.getQuestions();
  }
  create(questions: question){

    this.managequestionService.createQuestions(questions);
}

update1(questions:question){
  console.log(questions.id);
  this.questionDoc=this.afs.collection('questions').doc(questions.id);
  this.questionDoc.update(questions);
 }
edit(questionlist){
  this.getID=questionlist.id;
  this.editState=true;
  this.questiontoEdit=questionlist;
}
delete(id: string) {
  this.managequestionService.deleteQuestions(id);
}
// gotopostdetail(id:string){
// this.route.navigate(['PostDetail',{id:id}]);
// }
replies: reply={
  questionID:'',
  Author:this.getName,
  Post: '',
  Date:Date.now(),
  
}
onSubmit(questionlist){

    this.replies.questionID=questionlist.id;
    this.replies.Author=this.getName;
    this.replies.Date=Date.now();
    this.managereplyService.createReply(this.replies);
    this.replies.Post='';
    this.router.navigate(['/admin/postdetail/',this.getID,this.getName]);
  console.log(this.replies);
}
}

  