import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-reactive-exercise';
  projectForm: FormGroup = new FormGroup({});
  statusOptions = ['Stable', 'Critical', 'Finished'];
  defaultStatus = 'Stable';
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectName: [null, [Validators.required, this.forbiddenProjectName]],
      email: [null, [Validators.required, Validators.email], this.forbiddenEmail],
      status: [null]
    })
  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm!.value));
  }

  forbiddenProjectName(control: FormControl) {
    if (control.value === 'Test') {
      return {forbiddenProjectName: true}
    }
    return null
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'rodrimedeiros@gmail.com') {
          resolve({forbiddenEmail: true});
        } else {
          resolve(null);
        }
      }, 1500)
    })

    return promise
  }
}
