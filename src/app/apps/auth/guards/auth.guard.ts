import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable, from, map, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Inject, inject } from "@angular/core";


const checkStatus = (): boolean | Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router : Router = inject(Router);

  return authService.CheckAuthentication().pipe(
    // tap(authenticated => console.log("Autenticado en Auth: " + authenticated)),
    tap((isAuthenticated)=>{
      console.log("Autenticado, te mandare al admin");
      if(isAuthenticated)router.navigate(['/admin'])}
    ),
    map(isAuthenticated => !isAuthenticated)
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
