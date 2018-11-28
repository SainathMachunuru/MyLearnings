import { Component, OnInit,EventEmitter,Output, Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {
  
  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {
  }
  onSaveData(){
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response:Response) =>{
        console.log(response);
            }
);

  }
  fetchData(){
    this.dataStorageService.getRecipes();
  }
}
