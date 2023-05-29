import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  server_id: number;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.server_id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+this.server_id);
    this.route.params.subscribe((params: Params) => {
      this.server_id = params.id;
      this.server = this.serversService.getServer(+this.server_id);
    })
  }

}
