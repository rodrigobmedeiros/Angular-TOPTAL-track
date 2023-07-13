import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUserService } from './auth-user.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent {
  isLogin = false;

  constructor(private authUserService: AuthUserService) {}

  onSwitchOption(): void {
    this.isLogin = !this.isLogin;
  }

  onSubmit(authForm: NgForm) {
    const email: string = authForm.form.value.email
    const password: string = authForm.form.value.password

    if (this.isLogin) {
      console.log('Login process...');
    } else {
      this.authUserService.signup(email, password).subscribe(responseData => {
        console.log(responseData);
      }, error => {
        console.log(error);
      })
    }
    authForm.reset();
  }
}
