import { Observable, from, map, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { inject } from "@angular/core";

const checkStatus = (): boolean | Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router : Router = inject(Router);

  return authService.CheckAuthentication().pipe(
    // tap(authenticated => console.log("Autenticado en admin: " + authenticated)),
    tap((isAuthenticated)=>{
      // console.log("NO Autenticado, te mandare al auth");
      if(!isAuthenticated)router.navigate(['/auth'])}
    ),
    map(isAuthenticated => isAuthenticated)
  )
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
