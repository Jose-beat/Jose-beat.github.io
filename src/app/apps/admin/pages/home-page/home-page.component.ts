import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { pipe, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(): void{
    this.authService.Logout().subscribe(
      (response)=>{
        console.log(response);

      });
  }

  checkVerify(){
    console.log(this.authService.AuthVerify());
    if(!this.authService.AuthVerify()){
      this.router.navigate(['/admin/verify']);
    }
  }
}
