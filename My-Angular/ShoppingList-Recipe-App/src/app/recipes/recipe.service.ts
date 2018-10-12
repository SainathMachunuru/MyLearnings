import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '../../../node_modules/@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
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
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}