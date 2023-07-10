import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent {
  isLogin = false;

  onSwitchOption(): void {
    this.isLogin = !this.isLogin;
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
    authForm.reset();
  }
}
