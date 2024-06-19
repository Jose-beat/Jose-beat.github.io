import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable, from, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Inject, inject } from "@angular/core";


const checkStatus = (): boolean | Promise<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router : Router = inject(Router);

  return authService.CheckAuthentication().then(
    authenticated => {
      // console.log('Autenticado'  + authenticated);
        if(authenticated){
        console.log("Te mandare al Admin")
        debugger;
        return router.navigate(['/admin']);
        }
      // }else{
      //   return router.navigate(['/auth']);
      // }
      return !authenticated;
    }
  );


}



export const AuthActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkStatus();
}


export const AuthMatchGuard: CanMatchFn = (
  route: Route,
  urlSegment: UrlSegment[]
)=> {
  return checkStatus();
}
