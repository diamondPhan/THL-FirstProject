import { Component, OnInit } from '@angular/core';
import {ManagequestionService} from '../services/managequestion.service'
import { question } from '../model/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  constructor(private managequestionService:ManagequestionService) { }
 questionlist: question[];
 
  ngOnInit(): void {
    this.managequestionService.getQuestions().subscribe(data => {
      this.questionlist = data.map(e => {
        return {
          ID: e.payload.doc.id,
          Author: e.payload.doc.data(),
          Post: e.payload.doc.data(),
          Date:e.payload.doc.data(),
 
        } as question;
      })
    });
  }
  create(questions: question){
    
    this.managequestionService.createQuestions(questions);
}

update(questions: question) {
  this.managequestionService.updateQuestions(questions);
}

delete(id: string) {
  this.managequestionService.deleteQuestions(id);
}

}

  