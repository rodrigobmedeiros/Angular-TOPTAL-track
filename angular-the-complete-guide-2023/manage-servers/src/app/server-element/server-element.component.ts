import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('server') element: { name: string, content: string, type: string} | null = null;
  @ContentChild('paragraph') paragraph!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    alert('Child:' + this.paragraph.nativeElement.textContent);
  }
}
