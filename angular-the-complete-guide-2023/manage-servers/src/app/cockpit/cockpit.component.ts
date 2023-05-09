import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // newServerName: any = '';
  // newServerContent: any = '';
  @ViewChild("nameInput", { static: true }) nameInput!: ElementRef;
  @ViewChild("contentInput", { static: true }) contentInput!: ElementRef;
  @Output() newServerEmitter: EventEmitter<any>  = new EventEmitter()
  
  public onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement): void {
    this.newServerEmitter.emit(
      // {
      //   name: nameInput.value,
      //   content: contentInput.value,
      //   type: 'default'
      // }
      {
        name: this.nameInput.nativeElement.value,
        content: this.contentInput.nativeElement.value,
        type: 'default'
      }
    )
  }

  public onAddServerBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.newServerEmitter.emit(
      // {
      //   name: nameInput.value,
      //   content: contentInput.value,
      //   type: 'blueprint'
      // }
      {
        name: this.nameInput.nativeElement.value,
        content: this.contentInput.nativeElement.value,
        type: 'blueprint'
      }
    )
  }
}
