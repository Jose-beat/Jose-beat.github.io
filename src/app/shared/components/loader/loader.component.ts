import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/global/loading.service';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { environments } from '../../../../environments/environments';

@Component({
  selector: 'beat-loader',
  templateUrl: './loader.component.html',
  styles: [`
        .full-screen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Negro con transparencia del 50% */
          z-index: 9999; /* Asegura que esté por encima de otros elementos */
          display: flex;
          justify-content: center;
          align-items: center;
    }
    `]
})
export class LoaderComponent implements OnInit{

  loading$ : Observable<boolean>;

  @Input()
  detectedRouteTransitions = false;
  public loader : string = environments.LOADER_SVG;

  // @ContentChild("loading")
  // customLoadingIndicator : TemplateRef<any> | null = null;


  constructor(
    private loadingService : LoadingService,
    private router : Router
  ){
    this.loading$ = this.loadingService.loading$;
  }


  ngOnInit(): void {
    if(this.detectedRouteTransitions){
      this.router.events.pipe(
        tap((event)=>{
          if(event instanceof RouteConfigLoadStart){
            this.loadingService.loadingOn();
          }else if(event instanceof RouteConfigLoadEnd){
            this.loadingService.loadingOff();
          }
        })
      );
    }
  }
}
