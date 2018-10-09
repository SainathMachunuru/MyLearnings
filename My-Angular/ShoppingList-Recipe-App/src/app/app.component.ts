import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingList-Recipe-App';
  loadedFeature = 'recipe';
  onNagivate(feature:string){
    this.loadedFeature = feature;
  }
}
