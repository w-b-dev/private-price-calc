import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnInit {

  firebaseObject = environment.firebaseObject;

  firstTime = true;
  validation = 'Nops...';

  constructor() {
    firebase.initializeApp(this.firebaseObject);
  }

  ngOnInit() {
  }

  registerUser(u, p) {

    const authResult = firebase
      .auth()
      .createUserWithEmailAndPassword(u, p)
      .then(x => {
        this.firstTime = false;
        console.info('RETURNED RESPONSE', x);
        if (x.additionalUserInfo.isNewUser) {
          this.validation = x.additionalUserInfo.username;
          return console.info('USER REGISTERED', x.user.email);
        }
      })
      .catch(function (error) {
        console.error(error.code);
        console.error(error.message);
        return error;
      });

    console.info('AUTH RESULT IS', authResult);
    console.info('Validation', this.validation);
  }
}
