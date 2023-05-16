import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number: number | null = null;
  @Input() cleanNumbers: boolean = false;
  numbers: number[] = [];
  
  ngOnChanges() {
    if(this.number && this.number % 2 !== 0){
      this.numbers.push(this.number);
    }

    if(this.cleanNumbers) {
      this.numbers = [];
    }
  }
}
