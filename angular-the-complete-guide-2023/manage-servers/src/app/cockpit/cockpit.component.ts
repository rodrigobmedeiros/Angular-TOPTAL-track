import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // newServerName: any = '';
  // newServerContent: any = '';
  @Output() newServerEmitter: EventEmitter<any>  = new EventEmitter()
  
  public onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement): void {
    this.newServerEmitter.emit(
      {
        name: nameInput.value,
        content: contentInput.value,
        type: 'default'
      }
    )
  }

  public onAddServerBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.newServerEmitter.emit(
      {
        name: nameInput.value,
        content: contentInput.value,
        type: 'blueprint'
      }
    )
  }
}
