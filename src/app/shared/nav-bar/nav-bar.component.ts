import { Component, ElementRef, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'beat-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  implements OnInit{
  //@ViewChild('navbar') navbar! : ElementRef;

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


  }
  closeNavbar(){
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }



}
