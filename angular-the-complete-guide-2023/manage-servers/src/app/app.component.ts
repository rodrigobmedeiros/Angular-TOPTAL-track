import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  servers: any[] = [
    {
      name: 'server 01',
      content: 'server 01 content',
      type: 'default'
    }
  ];

  addServer(server: any) {
    this.servers.push(server);
  }

  
}
