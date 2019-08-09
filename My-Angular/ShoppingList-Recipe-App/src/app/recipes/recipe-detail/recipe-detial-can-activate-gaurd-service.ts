import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe.service";
@Injectable()
export class RecipeDetialCanActivateGaurdService implements CanActivate {
    constructor(private recipeService: RecipeService,
        private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       const recipeExist = !!this.recipeService.getRecipe(+route.paramMap.get('id'));
        if (recipeExist) {
            return true;

        } else {
            this.router.navigate(['notfound']);
            return false;
        }
    }

}