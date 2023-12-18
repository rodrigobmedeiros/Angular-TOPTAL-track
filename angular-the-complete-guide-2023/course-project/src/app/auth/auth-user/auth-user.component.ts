import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthDataResponse, AuthUserService } from './auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent {
  isLogin: boolean = false;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authUserService: AuthUserService, private route: Router) {}

  onSwitchOption(): void {
    this.isLogin = !this.isLogin;
  }

  onSubmit(authForm: NgForm) {
    const email: string = authForm.form.value.email
    const password: string = authForm.form.value.password
    let authObs: Observable<AuthDataResponse>;
    this.isLoading = true;
    if (this.isLogin) {
      authObs = this.authUserService.signin(email, password);
      this.isLoading = false;
    } else {
      authObs = this.authUserService.signup(email, password)
    }
    authObs.subscribe(responseData => {
      console.log(responseData);
      this.isLoading = false;
      this.route.navigate(['/recipes']);
    }, error => {
      this.error = error;
      this.isLoading = false;
    })
    authForm.reset();
  }
}
