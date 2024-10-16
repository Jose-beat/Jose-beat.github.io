import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpContextToken
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

export const SkipLoading = new HttpContextToken<boolean>(()=>false);

//TODO: Optimizacion de Loader
@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {

    if(req.context.get(SkipLoading)){
      return next.handle(req);
    }


    console.error("CARGANDO!!!!!!!");


    return next.handle(req).pipe(
      finalize(()=>{
        console.error("YA NO ESTA CARGANDO!!!!!!!");
      })
    );


  }


}
