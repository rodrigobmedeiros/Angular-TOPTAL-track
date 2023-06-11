import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  userForm: FormGroup;
  notPermitedNames: string[] = ['Rodrigo', 'Renata'];

  ngOnInit() {
    this.userForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.userForm.value));
  }

  getControls() {
    return (<FormArray>this.userForm.get('hobbies')).controls;
  }

  onAddcontrols() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.userForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.notPermitedNames.indexOf(control.value) !== -1) {
      return {forbiddenName: true};
    }
    return null // Or omitted
  }
}
