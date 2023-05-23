import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: any[];
  inactiveUsers: any[];

  constructor(private userService: UserServiceService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  getNumberOfActivations() {
    return this.counterService.inactiveToActiveCounter;
  }

  getNumberOfDeactivations() {
    return this.counterService.activeToInactiveCounter;
  }
}
