import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider} from '@angular/fire/auth';
import {map} from "rxjs";
import {User} from "../../classes/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  authState() {
    return this.fireAuth.authState.pipe(
      map(user => new User(user)),
    );
  }

  async signInWithGoogle() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  async logout() {
    return this.fireAuth.signOut();
  }
}
