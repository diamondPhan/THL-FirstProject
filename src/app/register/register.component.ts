import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MustMatch } from '../model/CustomValidator';
import { account } from '../model/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private createAcc:RegisterService, private signup:RegisterService) { }
  registerForm: FormGroup;
  ngOnInit(): void {
  
  this.registerForm=this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required,Validators.email],
    email:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  },
  {
    validators:MustMatch('password','confirmPassword')
  }
  );
}
 
    creataccountonfb(){
      let acc = new account();
      acc.email=this.registerForm.controls["email"].value;
      acc.firstName=this.registerForm.controls["firstName"].value;
      acc.lastName=this.registerForm.controls["lastName"].value;
      acc.password=this.registerForm.controls["password"].value;
      this.signup.signup(acc.email,acc.password).then(res=>{
        console.log(res);
        alert("DANG KY THANH CONG ROI NHAAA <3")
        location.href="/admin/main";
        });
      //location.href="/login";
    }
  
}
