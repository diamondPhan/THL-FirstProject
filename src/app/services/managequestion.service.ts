import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFirestore } from '@angular/fire/firestore';
import { question } from '../model/question';
@Injectable({
  providedIn: 'root'
})
export class ManagequestionService {

  constructor(private firestore: AngularFirestore) { }
   

  getQuestions() {
    return this.firestore.collection('questions').snapshotChanges();
}
  createQuestions(questions: question){
  return this.firestore.collection('questions').add(questions);
}
  updateQuestions(questions: question){
  delete questions.ID;
  this.firestore.doc('questions/' + questions.ID).update(questions);
}
deleteQuestions(questionId: string){
  this.firestore.doc('questions/' + questionId).delete();
}
}



