import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SignUpResponce {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  firebaseKey: string = "AIzaSyA7xDiJ8i3L-tTRqdsyoROwoetJjqm7GKY"
  signupRoute: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseKey}`
  

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<SignUpResponce> {
    return this.http.post<SignUpResponce>(this.signupRoute, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
