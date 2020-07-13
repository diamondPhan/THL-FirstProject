import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
    private router: Router,private fb:FormBuilder, private fblogin:AuthService) { }

  loginform:FormGroup;

  ngOnInit(): void {
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
    }
  

  tryGoogleLogin(){
    this.authService.signinGmail()
     .then(res=>{
       // this.router.navigate(["/home"]);
       location.href="./admin/dashboard"
       }).catch(err=>{
         console.log(err); 
        
       })
   }	
   onSubmit(){}
   loginwithfb(){
     let email=this.loginform.controls["email"].value;
     let password=this.loginform.controls["password"].value;
     this.fblogin.siginFirebase(email,password).then(res=>{
      console.log("Login Success!");
      location.href="./admin/dashboard";
     })
   }
}
