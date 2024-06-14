import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private authService : AuthService){}

  logIn(){
    this.authService.Login().subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }
}
