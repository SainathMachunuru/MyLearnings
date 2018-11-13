import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params} from '@angular/router';
import { query } from '@angular/core/src/render3/query';
import { Router } from '@angular/router';
import { CanDeactivateGaurd, CanCompotentDeactivate } from './can-deactivate-gaurd.service';
import { Observable } from "../../../../node_modules/rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanCompotentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  chnagesSaved = false;
  constructor(private serversService: ServersService,
                      private  route:ActivatedRoute,
                      private router:Router) { }

  ngOnInit() {
    console.log(this.route.queryParams);
    console.log(this.route.fragment);
    this.route.queryParams.subscribe(
      (queryParams:Params) => {
        this.allowEdit = queryParams['allowEdit'] == '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = this.route.snapshot.params['id'];

    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.chnagesSaved = true;
    this.router.navigate(['../'], {relativeTo:this.route})
  }
  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){
      return true;
    }
    if( (this.serverName !== this.server.name || this.serverStatus !== this.server.status) && 
      !this.chnagesSaved){
        return confirm('do you want to dicard chnages ? ');
      }
   else{
     return true;
   }

  }

}
