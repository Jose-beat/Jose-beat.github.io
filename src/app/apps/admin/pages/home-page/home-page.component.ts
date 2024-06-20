import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { pipe, tap } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private authService : AuthService){}

  logout(): void{
    this.authService.Logout().subscribe(
      (response)=>{
        console.log(response);

      }
    );



  }
}
