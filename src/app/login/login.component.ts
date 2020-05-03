import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../shared/auth.service';
//import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
ngForm=new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
})

//   get username() {
//     return this.ngForm.get('username');
// } 

// get password() {
//   return this.ngForm.get('password');
// } 


onSubmit(){

}

login()
{
  this.auth.login(this.username,this.password);
  this.username=this.password='';
}
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

}
