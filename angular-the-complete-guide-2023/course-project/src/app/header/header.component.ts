import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureOptions: EventEmitter<string> = new EventEmitter();
  collapsed = true;

  onSelect(featureSelected: string): void {
    this.featureOptions.emit(featureSelected);
  }
}
