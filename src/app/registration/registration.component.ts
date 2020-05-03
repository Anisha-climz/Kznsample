import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Register } from '../shared/userreg.model';
import { AuthService } from '../shared/auth.service';
//import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {

username:string;
password:string;

  constructor(public userservice: UserService, private auth:AuthService) { }
  ngOnInit() {
    this.userservice.getData();
    this.resetForm();
  }

  onSubmit(userform: NgForm) {
    //console.log(userform.value.name);
    if ((userform.value.name == "") || (userform.value.email == "") || (userform.value.username == "") || (userform.value.pwd == "") || (userform.value.cpwd == "")) {
      console.log("required fields");
      //console.log(userreg.name);
    }
    else{
      
      if ((userform.value.pwd) == (userform.value.cpwd)) {
        if (userform.value.$key == null)
          this.userservice.insertusers(userform.value);
        this.resetForm(userform);
        console.log("password match");
       // console.log();
       
      }
      else {
        console.log("password mismatch");
        this.resetForm(userform);
      }
    }
   
    //this.toastr.success('Submitted Successfully', 'Employee Register');
  }

  resetForm(userform?: NgForm) {
    if (userform != null)
      userform.reset();
    this.userservice.newuser = {
      $key: null,
      name: '',
      email: '',
      username: '',
      pwd: '',
      cpwd: ''
    }
  }

  // signup()
  // {
  //   this.auth.signup(this.username,this.password);
  //   this.username=this.password='';
  // }

}