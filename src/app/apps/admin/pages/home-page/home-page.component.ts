import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { pipe, tap } from 'rxjs';
import { Router } from '@angular/router';
import { GraphicUtilities } from '../../../../shared/utilities/graphic.utilities';
import { DataService } from '../../services/data.service';
import { ITransaction } from '../../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { User } from '../../../../shared/model/User.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private dataService : DataService,
    private router : Router
  ){}

  public activeLoginForm : boolean = false;

  ngOnInit(): void {

    GraphicUtilities.closeNavbar(this.router);

    this.dataService.activeloginForm.subscribe(data => {
        if(data){
          this.activeLoginForm = data;
        }
    });
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



  login(response : ITransaction<User> | null){
    console.warn(response);
    this.dataService.login(response);
    this.activeLoginForm = false;
    this.dataService.resetData();
  }



}
