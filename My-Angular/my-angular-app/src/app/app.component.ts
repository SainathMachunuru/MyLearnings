import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles : [`h1 {color: red;}`]

})
export class AppComponent {
  name = 'welcome';
  log = [];
  showSecrete = false;

  onToggleDetails(){
    this.showSecrete = !this.showSecrete;
   // this.log.push(this.log.length+1);
   this.log.push(new Date());
  }
}

