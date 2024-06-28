import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { pipe, tap } from 'rxjs';
import { Router } from '@angular/router';
import { GraphicUtilities } from '../../../../shared/utilities/graphic.utilities';

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

    GraphicUtilities.closeNavbar(this.router);
  }

  logout(): void{
    this.authService.Logout().subscribe(
      (response)=>{
        if(response){
          this.router.navigate(['/auth']);
        }

      });
  }

  checkVerify(){
    console.log(this.authService.AuthVerify());
    if(!this.authService.AuthVerify()){
      this.router.navigate(['/admin/verify']);
    }
  }
}
