import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { reply } from '../model/replylist';

@Injectable({
  providedIn: 'root'
})
export class ManagereplyService {

  constructor(private firestore: AngularFirestore) { }
  getReply(replies:reply) {
    return this.firestore.collection('replies/'+replies.questionID).snapshotChanges();
}
getReplyList() {
  return this.firestore.collection('replies').snapshotChanges();
}
  createReply(replies: reply){
  return this.firestore.collection('replies').add(replies);
}
  updateQuestions(replies: reply){
  delete replies.questionID;
  this.firestore.doc('replies/' + replies.questionID).update(replies);
}
deleteQuestions(replyId: string){
  this.firestore.doc('replies/' + replyId).delete();
}
}
