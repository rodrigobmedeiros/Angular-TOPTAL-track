import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  defaultUsername: string = 'rodrigobmedeiros';
  defaultEmail: string = 'rodrimedeiros@gmail.com';
  questionAnswer: string = '';
  
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // public onSubmit(form: NgForm) {
  //   alert('Form submitted!');
  //   alert(JSON.stringify(form.value));
  // }

  public onSubmit() {
    alert(JSON.stringify(this.form.value))
    alert(this.form.valid);
  }
}
