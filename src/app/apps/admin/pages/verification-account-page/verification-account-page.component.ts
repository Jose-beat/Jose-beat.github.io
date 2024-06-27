import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Alert } from '../../../../shared/utilities/alert.utilities';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-verification-account-page',
  templateUrl: './verification-account-page.component.html',
  styleUrl: './verification-account-page.component.css'
})
export class VerificationAccountPageComponent implements OnInit {
  constructor(
    private authService : AuthService,
    private router : Router
  ){}
  ngOnInit(): void {
    this.checkVerification();
  }


  checkVerification() : void {
    if(this.authService.AuthVerify()) this.router.navigate(['/admin/dashboard']);
  }
  async sendVerification(){
    await this.authService.VerifyUserAuth().then(
      (response)=>{
        Alert.sweetAlert(response).then(()=>{
        })
      }
    );
  }

}
