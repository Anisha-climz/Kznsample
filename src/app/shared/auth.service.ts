import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import { Register } from './userreg.model';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
private user:Observable<firebase.User>;
  constructor(private fireauth:AngularFireAuth, 
    //private db:AngularFireDatabase,
    private router: Router
    )
   { }

// signup(username:string,password:string)
// {
//   this.fireauth.auth.createUserWithEmailAndPassword(username,password).then(
//     value=>{
//       console.log('Success',value);
//       this.router.navigate(['dashboard']);
//     }
//   ).catch(err=>{
//     console.log('Something went wrong:',err.message);
//   })
// }

login(username:string,password:string)
{
  this.fireauth.auth.signInWithEmailAndPassword(username,password).then(
    value=>{
      console.log('Nice');
      this.router.navigate(['dashboard']);
    }
  ).catch(err=>{
    console.log('Something went wrong:',err.message);
  })
}


}
