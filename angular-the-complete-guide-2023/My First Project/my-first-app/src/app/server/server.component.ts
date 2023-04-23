import { Component } from '@angular/core';

@Component({
    selector: 'server-component',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    allowToActivateServer: boolean = false;
    serverName: string = '';
    serverCreated: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowToActivateServer = true;
        }, 5000);
    }

    activateServer() {
        this.serverCreated = true;
        this.serverStatus = "online";
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}