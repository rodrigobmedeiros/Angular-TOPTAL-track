import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUserService } from './auth-user.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent {
  isLogin: boolean = false;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authUserService: AuthUserService) {}

  onSwitchOption(): void {
    this.isLogin = !this.isLogin;
  }

  onSubmit(authForm: NgForm) {
    const email: string = authForm.form.value.email
    const password: string = authForm.form.value.password
    this.isLoading = true;
    if (this.isLogin) {
      console.log('Login process...');
      this.isLoading = false;
    } else {
      this.authUserService.signup(email, password).subscribe(responseData => {
        this.isLoading = false;
      }, error => {
        this.error = 'An error occurred!';
        this.isLoading = false;
      })
    }
    authForm.reset();
  }
}
