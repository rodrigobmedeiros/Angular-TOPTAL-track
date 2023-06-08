import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  defaultUsername: string = 'rodrigo bernardo medeiros';
  defaultEmail: string = 'rodrimedeiros@gmail.com';
  genders: string[] = ['male', 'female'];
  questionAnswer: string = '';
  submitted: boolean = false;
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  }
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    // Essa seria uma forma de setar valores para o meu formulario, porem sempre tendo que atualizar todos os valores no 
    // caso do setValue
    // this.form.setValue({
    //   ...this.form.value,
    //   userData: {
    //     username: suggestedName,
    //     email: this.form.value.userData.email
    //   }
    // })
    
    // Agora no caso do patchValue consigo atualizar soh um valor especifico o resto continua do jeito que esta
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })

  }

  // public onSubmit(form: NgForm) {
  //   alert('Form submitted!');
  //   alert(JSON.stringify(form.value));
  // }

  public onSubmit() {
    this.submitted = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.question = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;
  }
}
