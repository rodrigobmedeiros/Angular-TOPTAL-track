import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  private firebaseKey: string = "AIzaSyA7xDiJ8i3L-tTRqdsyoROwoetJjqm7GKY"
  private signupRoute: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseKey}`
  

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<SignUpResponce> {
    return this.http.post<SignUpResponce>(this.signupRoute, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError((errorResponse) => {
      let errorMessage = "An unknown error occurred!";
      if (!errorResponse.error || !errorResponse.error.error.message) {
        return throwError(errorMessage);
      }
      switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = "This email has already been used!";
      }
      return throwError(errorMessage);
    }))
  }
}
