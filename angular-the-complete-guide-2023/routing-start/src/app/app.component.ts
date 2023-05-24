import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuName: string = 'Home'

  public setActive(menuName: string) {
    this.menuName = menuName;
  }
}
