import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

export class GraphicUtilities  {

  static closeNavbar(router :Router){

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(()=> {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });


  }


}
