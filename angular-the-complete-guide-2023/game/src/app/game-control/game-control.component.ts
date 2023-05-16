import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  timer: any;
  currentNumber: number = 0;
  erasePreviousNumbers: boolean = false;

  startTimer() {
    this.erasePreviousNumbers = false;
    this.timer = setInterval(() => {
      this.currentNumber++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.stopTimer();
    this.currentNumber = 0;
    this.erasePreviousNumbers = true;
  }
}
