import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: string;
  userName: string;
  constructor(private router: Router) { }
  registerUSer(email: string,  password: string) {firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {this.userName = email.split('@')[0];this.connecterUser(email, password);})
      .catch(error => console.log(error));

  }
  connecterUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {console.log(response);
      this.userName = email.split('@')[0];
         } );
    this.router.navigate(['']);
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token )
      .catch(error => console.log(error));
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token);
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  getName() {
    return this.userName;
  }
  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
