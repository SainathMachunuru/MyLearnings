import { CanDeactivate } from '@angular/router';
import { RecipeEditComponent } from "./recipe-edit.component";
import { Injectable } from '@angular/core';
@Injectable()
export class RecipeCanDeactivateGaurdService implements CanDeactivate<RecipeEditComponent> {
    canDeactivate(component: RecipeEditComponent ):  boolean {
        if(component.recipeForm.dirty) {
            return confirm('are you sure want to discard your chnages');

        }
        return true;
    }
}
