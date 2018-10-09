import { Component, OnInit } from '@angular/core';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: `<app-server></app-server>
              <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created: ';
  serverName = 'sample-server';
  serverCreated = false;
  servers = ['AppServer1','AppServer2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit(){

  }
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created with name '+this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

 

}
