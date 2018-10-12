import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  paramSubsccription:Subscription
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
    };
    this.paramSubsccription = this.route.params
      .subscribe(
        (params:Params) =>{
          this.user.id = params['id'],
          this.user.name = params['name']

        }
      );
  }
  ngOnDestroy(){
this.paramSubsccription.unsubscribe();
  }

}
