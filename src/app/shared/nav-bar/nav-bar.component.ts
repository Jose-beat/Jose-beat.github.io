import { Component, ElementRef, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'beat-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  implements OnInit{
  @ViewChild('navbar') navbar! : ElementRef;

  menuItems = [
    {label: 'Home', target: '#home', route: 'web/home'},
    {label: 'Portafolio', target: '#briefCase',route: 'web/briefCase'},
    {label: 'Contacto', target: '#contact', route: 'web/contact'},

  ]


  constructor(private router : Router){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(()=> {
        this.closeNavbar();
    });

    this.adjustMarginContainer();
  }

  scrollTo(target: string) {
    var offsetAdjustment = 70;
    const element = document.getElementById(target.replace('#', ''));
    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    console.log(navbarHeight);
    console.log(element);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
      setTimeout(function() {
        // Desplazar un poco hacia arriba para dejar espacio adicional por el navbar
        window.scrollBy({
            top: -offsetAdjustment,
            behavior: 'smooth'
        });
      }, 400); // Ajusta el tiempo según la duración del scroll suave


    }

  }

  closeNavbar(){
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(){
    this.adjustMarginContainer();

  }



  adjustMarginContainer(): void{

    const heightNavbar = document.querySelector('.navbar-nav')?.clientHeight;
    document.body.style.padding = `${heightNavbar!}px`;

  }
}
