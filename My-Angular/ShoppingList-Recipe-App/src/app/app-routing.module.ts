import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeCanDeactivateGaurdService} from './recipes/recipe-edit/recipe-can-deactivate-gaurd-service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetialCanActivateGaurdService } from "./recipes/recipe-detail/recipe-detial-can-activate-gaurd-service";
const appRoutes: Routes = [
    {path: '', redirectTo: 'recipes',pathMatch:'full'},
    {path: 'recipes',component: RecipesComponent,children: [
        {path: '',component: RecipeStartComponent},
        {path: 'new',component :RecipeEditComponent,canDeactivate:[RecipeCanDeactivateGaurdService]},
        {path: ':id',component :RecipeDetailComponent,canActivate : [RecipeDetialCanActivateGaurdService]},
        {path: ':id/edit',component :RecipeEditComponent,canDeactivate:[RecipeCanDeactivateGaurdService]}
    ]},
    {path: 'shopping-list',component: ShoppingListComponent},
    {path : 'notfound', component: PageNotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}