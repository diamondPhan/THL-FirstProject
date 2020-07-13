import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
		import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFirestore,	public afAuth: AngularFireAuth) { }
  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = this.afAuth.onAuthStateChanged(function(user){
      if (user) {
        resolve(user);
      } else {				 
        reject('No user logged in');
      }
      })
    })
  }
  logout(){
    return new Promise<any>((resolve,reject)=>{
      if (this.afAuth.currentUser){
      //if (this.fauth.auth.currentUser){
  
      this.afAuth.signOut();
      resolve("log out");
      }else{
      reject();
      }
  
    })
  }
}
