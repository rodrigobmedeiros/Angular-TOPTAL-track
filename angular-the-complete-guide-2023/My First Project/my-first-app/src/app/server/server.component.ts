import { Component } from '@angular/core';

@Component({
    selector: 'server-component',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    allowToActivateServer: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowToActivateServer = true;
        }, 5000);
    }

    activateServer() {
        this.serverStatus = "online";
    }
}