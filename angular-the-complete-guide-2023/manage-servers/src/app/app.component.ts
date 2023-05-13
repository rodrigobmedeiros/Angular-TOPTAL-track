import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('paragraph') paragraph!: ElementRef;
  servers: any[] = [
    {
      name: 'server 01',
      content: 'server 01 content',
      type: 'default'
    }
  ];

  addServer(server: any) {
    this.servers.push(server);
    alert('parent:' + this.paragraph.nativeElement.textContent);
  }

  
}
