import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '../../../node_modules/@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

     public  getIngredients(){
          return this.ingredients.slice();
      }
     public addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
     public addIngredients(ingredients:Ingredient[]){
        /*for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        }*/
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
     }


}