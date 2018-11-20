import { Recipe } from './recipe.model';
import {Injectable } from '../../../node_modules/@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    private  recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test',
        'http://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg',
         [
             new Ingredient('rice',1),
             new Ingredient('chicken',2)
         ]
    ),
        new Recipe('Another Test Recipe', 
        'This is simply a test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCrleTmsgSNGHaOeKXryvvXtDLkeVcNcsAn70j2p6pUnURVabGg',
        [
            new Ingredient('bread',2),
            new Ingredient('cheese',1)
        ]
    )
      ];
      constructor(private shoppingListService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
    
      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
    
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
      

}