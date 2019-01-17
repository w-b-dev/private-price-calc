import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnInit {

  firebaseObject = {
    apiKey: 'AIzaSyA64gK1tBuawveQQiGDyRPM-TbhdvSnlco',
    authDomain: 'temp-artistic-dec5th.firebaseapp.com',
    databaseURL: 'https://temp-artistic-dec5th.firebaseio.com',
    projectId: 'temp-artistic-dec5th',
    storageBucket: 'temp-artistic-dec5th.appspot.com',
    messagingSenderId: '307284383861',
  };

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
