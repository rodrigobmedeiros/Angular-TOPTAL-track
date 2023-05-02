import { Component } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input('server') element: { name: string, content: string, type: string} | null = null;

  constructor() {}
}
