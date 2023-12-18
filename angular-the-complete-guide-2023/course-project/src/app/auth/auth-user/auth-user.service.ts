import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthDataResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  user = new Subject<User>();
  private firebaseKey: string = "AIzaSyA7xDiJ8i3L-tTRqdsyoROwoetJjqm7GKY"
  private signupRoute: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseKey}`;
  private signInRoute: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseKey}`;
  

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<AuthDataResponse> {
    return this.http.post<AuthDataResponse>(this.signupRoute, {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(
      catchError(this.errorHandling), 
      tap((resData: AuthDataResponse) => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      })
    )
  }

  private handleAuthentication(email: string, id: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
  }

  signin(email: string, password: string): Observable<AuthDataResponse> {
    return this.http.post<AuthDataResponse>(this.signInRoute, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.errorHandling),
      tap((resData: AuthDataResponse) => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      })
    )
  }

  private errorHandling(errorResponse: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred!";
      if (!errorResponse.error || !errorResponse.error.error.message) {
        return throwError(errorMessage);
      }
      switch (errorResponse.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          errorMessage = "This email is not registered, please SIGN UP first.";
          break;
        case 'EMAIL_EXISTS':
          errorMessage = "This email has already been used!";
          break;
        case 'INVALID_PASSWORD':
          errorMessage = "This password is not valid!";
          break;
      }
      return throwError(errorMessage);
  }
}
