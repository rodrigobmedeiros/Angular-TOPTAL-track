import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName: any = '';
  newServerContent: any = '';
  
  public onAddServer() {
    // this.servers.push({
    //   name: this.newServerName,
    //   content: this.newServerContent,
    //   type: 'default'
    // })
  }

  public onAddServerBlueprint() {
    // this.servers.push({
    //   name: this.newServerName,
    //   content: this.newServerContent,
    //   type: 'blueprint'
    // })
  }
}
