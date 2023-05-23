import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  inactiveToActiveCounter: number = 0;
  activeToInactiveCounter: number = 0;

  constructor() { }
}
