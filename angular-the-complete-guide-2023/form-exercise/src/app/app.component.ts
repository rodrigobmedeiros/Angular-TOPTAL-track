import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm | null = null;
  title = 'form-exercise';
  subscriptions = [
    "Basic",
    "Advanced",
    "Pro"
  ];
  defaultSubscription="Advanced";
  submitted: boolean = false;
  userData = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.userData.email = this.form!.value.email;
    this.userData.subscription = this.form!.value.subscription;
    this.userData.password = this.form!.value.password;
    this.form!.reset();
  }
}
