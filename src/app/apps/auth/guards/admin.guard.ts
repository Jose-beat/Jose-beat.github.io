import { Observable, from, map, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { inject } from "@angular/core";

const checkStatus = (): boolean | Promise<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router : Router = inject(Router);

  return authService.CheckAuthentication().then(
    authenticated => {
      // console.log('Autenticado'  + authenticated);
      // if(authenticated)return router.navigate(['./']);
      if(!authenticated){
        console.log("Te mandare al login")
        debugger;
        return router.navigate(['/auth']);
      }
      return authenticated;
    }
  );


}
export const AdminActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
)=> {
  return checkStatus();
};

export const AdminMatchGuard: CanMatchFn = (
  route: Route,
  urlSegment: UrlSegment[]
)=> {
  return checkStatus();
};
