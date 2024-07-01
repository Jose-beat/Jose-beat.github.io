import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { MenuItem } from '../../../../shared/interfaces/MenuItem.interface';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  menuItems : MenuItem[] = [
    {label: 'Dashboard', target: '#dashboard', route: '/admin/dashboard'},
    {label: 'Proyectos', target: '#project',route: '/admin/project'},
    {label: 'Catalogo', target: '#catalog', route: '/admin/catalog'},
    // {label: 'Perfil', target: '#profile', route: '/admin/profile'},

  ];

  constructor(
    private authService : AuthService,
    private router : Router
  ){}


  logout(): void{
    this.authService.Logout().subscribe(
      (response)=>{
        if(response){
          this.router.navigate(['/auth']);
        }

      });
  }
}
