import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Register } from '../shared/userreg.model';

@Injectable(
  { providedIn: 'root' }
)
export class UserService {
  userList: AngularFireList<any>;
  newuser: Register = new Register();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.userList = this.firebase.list('users');
    //console.log(this.userList);
    return this.userList;
  }

  insertusers(user: Register) {
    this.userList.push({
      name: user.name,
      email: user.email,
      username: user.username,
      pwd: user.pwd,
      cpwd: user.cpwd
    });
  }
}