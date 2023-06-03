import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscribe: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscribe = interval(1000).subscribe((count) => {
      console.log(count);
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }
}