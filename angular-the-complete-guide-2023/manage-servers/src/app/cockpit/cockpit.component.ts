import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName: any = '';
  newServerContent: any = '';
  @Output() newServerEmitter: EventEmitter<any>  = new EventEmitter()
  
  public onAddServer(): void {
    this.newServerEmitter.emit(
      {
        name: this.newServerName,
        content: this.newServerContent,
        type: 'default'
      }
    )
  }

  public onAddServerBlueprint() {
    this.newServerEmitter.emit(
      {
        name: this.newServerName,
        content: this.newServerContent,
        type: 'blueprint'
      }
    )
  }
}
