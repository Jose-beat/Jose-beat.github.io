import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanMatchFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";


const checkStatus = () : boolean | Observable<boolean> => {

}



export const AuthActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

}


export const AuthMatchGuard: CanMatchFn = (
  route: Route,
  urlSegment: UrlSegment
)=> {

}
