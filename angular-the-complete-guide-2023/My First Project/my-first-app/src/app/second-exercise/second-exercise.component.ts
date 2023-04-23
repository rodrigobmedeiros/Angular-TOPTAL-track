import { Component } from '@angular/core';

@Component({
  selector: 'app-second-exercise',
  templateUrl: './second-exercise.component.html',
  styleUrls: ['./second-exercise.component.css']
})
export class SecondExerciseComponent {
  username: string = '';
  buttonActive: boolean = this.username ? true : false;

  onUpdateUsername() {
    this.username = '';
  }
}
