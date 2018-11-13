import { Observable } from "../../../../node_modules/rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";

export interface CanCompotentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGaurd implements CanDeactivate<CanCompotentDeactivate>{
    canDeactivate(component : CanCompotentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
                      return component.canDeactivate();
                  }

    }

