import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnChanges{
  @Input() number: number | null = null;
  @Input() cleanNumbers: boolean = false;
  numbers: number[] = [];

  ngOnChanges() {
    if(this.number && this.number % 2 === 0){
      this.numbers.push(this.number);
    }

    if(this.cleanNumbers) {
      this.numbers = [];
    }
  }
}
