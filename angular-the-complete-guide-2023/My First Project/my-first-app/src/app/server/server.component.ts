import { Component } from '@angular/core';

@Component({
    selector: 'server-component',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    allowToActivateServer: boolean = false;
    serverName: string = '';
    serverCreated: boolean = false;

    servers = [
        {
            id: 1,
            status: 'online',
            name: 'Teste'
        },
        {
            id: 2,
            status: 'online',
            name: 'Teste 2'
        },
    ]

    constructor() {
        setTimeout(() => {
            this.allowToActivateServer = true;
        }, 5000);
    }

    activateServer() {
        // this.serverCreated = true;
        // this.serverStatus = "online";
        this.servers.push(
            {
                name: this.serverName,
                id: this.servers[this.servers.length - 1].id + 1,
                status: 'offline'
            }
        )

    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor(server: any) {
        return server.status === 'online' ? 'green' : 'red';
    }
}