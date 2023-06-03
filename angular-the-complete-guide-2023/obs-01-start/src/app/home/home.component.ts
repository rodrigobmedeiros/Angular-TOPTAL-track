import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscribe: Subscription;

  constructor() {}

  ngOnInit() {
    // this.subscribe = interval(1000).subscribe((count) => {
    //   console.log(count);
    // })
    let count = 0;
    const customIntervalObserver = Observable.create((observer: Observer<number>) => {
      setInterval(() => {

        if (count > 4) {
          observer.error(new Error('Count is greater than 4!'));
        }

        observer.next(count);
        count++
      }, 1000);
    })
    this.subscribe = customIntervalObserver.subscribe((data: number) => {
      console.log(data);
    }, (error: Error) => {
      alert(error.message);
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }
}
