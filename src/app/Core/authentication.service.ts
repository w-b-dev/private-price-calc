import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {environment} from "../../environments/environment";
import * as storage from "localforage";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  firebaseObject = environment.firebaseObject;
  firstTime: boolean = true;

  constructor() {
    firebase.initializeApp(this.firebaseObject);
  }

  private changeLoginStatus(){
    this.firstTime = !this.firstTime;
  }

  signIn(u, p) {
    /*TODO: make login*/
    console.info(`Send this to login API: ${u} and ${p}`)
  }

  registerUser(u, p) {

    const result = firebase
      .auth()
      .createUserWithEmailAndPassword(u, p)
      .then(x => x)
      .catch(error => storage.setItem(new Date().toString(), error));

    result.then(x => {
      // console.table(x);
      if (x.message) {
        console.error('⛔ Validation message:', x.message)
      } else {
        this.changeLoginStatus();
        console.info('✔ Succeeded: ' + x.operationType + ' for ' + x.user.email);
        storage.setItem(x.user.email, {
          logDate: new Date().toString(),
          metadata: x.user.metadata,
          isNewUser: x.additionalUserInfo.isNewUser,
        });
      }
    });
  }
}
