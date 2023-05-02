import { Component } from '@angular/core';

@Component({
  selector: 'app-third-exercise',
  templateUrl: './third-exercise.component.html',
  styles: [`
    .greaterThanFour {
      color: white;
    }
  `]
})
export class ThirdExerciseComponent {
  showParagraph: boolean = true;
  logs: Date[] = [];
  click: number = 0;

  onclick() {
    this.showParagraph = !this.showParagraph;
    this.click += 1;
    this.logs.push(new Date());
  }

  // Use getColor to return color and for activate the color white because null is Falsy and the condition
  // is the same.
  getColor(currentClick: number) {
    return currentClick >= 4 ? 'blue' : null;
  }
}

