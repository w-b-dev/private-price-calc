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

  constructor() {
    firebase.initializeApp(this.firebaseObject);
  }

  ngOnInit() {
  }

  registerUser(u, p) {
    u === '' ? u = 'daniel@codein.ca' : null;
    p === '' ? p = 'kkkkkk' : null;
    firebase
      .auth()
      .createUserWithEmailAndPassword(u, p)
      .then(x => {
        this.firstTime = false;
        console.info('RETURNED RESPONSE', x);
        x.additionalUserInfo.isNewUser ? console.info('USER REGISTERED', x.user.email) : null;
      })
      .catch(function (error) {
        error.code === 'auth/email-already-in-use' ? console.info('😒', error.code) : console.error(error.code);
        console.error(error.message);
        return false;
      }).finally(() => console.info('DONE'));
  }
}
