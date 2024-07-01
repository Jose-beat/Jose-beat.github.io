import { Component, ElementRef, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GraphicUtilities } from '../../../../shared/utilities/graphic.utilities';
import { MenuItem } from '../../../../shared/interfaces/MenuItem.interface';

@Component({
  selector: 'beat-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  implements OnInit{
  //@ViewChild('navbar') navbar! : ElementRef;

  menuItems : MenuItem[] = [
    {label: 'Curriculum', target: '#home', route: '/web/resume'},
    {label: 'Portafolio', target: '#briefCase',route: '/web/briefCase'},
    {label: 'Contacto', target: '#contact', route: '/web/contact'},

  ]


  constructor(private router : Router){}

  ngOnInit(): void {

    GraphicUtilities.closeNavbar(this.router);


  }




}
