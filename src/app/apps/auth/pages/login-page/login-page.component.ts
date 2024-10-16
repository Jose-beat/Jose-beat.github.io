import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../shared/validator/validator.service';
import { Alert } from '../../../../shared/utilities/alert.utilities';
import { ITransaction } from '../../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { User } from '../../../../shared/model/User.model';
import { AuthTransaction } from '../../providers/transaction/AuthTransaction.class';
import { Router } from '@angular/router';
import { FormUtilities } from '../../../../shared/utilities/form.utilities';
import { LoadingService } from '../../../../shared/services/global/loading.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  constructor(
    private authService : AuthService,
    private formBuilder : FormBuilder,
    private router : Router,
    private validatorService : ValidatorsService,
    private loadingService : LoadingService
  ){}

  public response? : ITransaction<User>;
  public loader : boolean = false;
  public formLogin : FormGroup = this.formBuilder.group({
    Email : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    Password : ['', [Validators.required]]
  });
  public validatorUtilities : FormUtilities = new FormUtilities(this.formLogin);

  async logIn(){
    this.loadingService.loadingOn();
    this.response = await this.authService.Login<User>(this.formLogin.value.Email, this.formLogin.value.Password);

    if(this.response.Error){
      this.loadingService.loadingOff();
      Alert.sweetAlert(this.response).then();
      return;
    }
    this.loadingService.loadingOff();
    Alert.sweetAlert(this.response).then(
      (result)=>{
        if(result.isConfirmed){
          this.router.navigate([this.response?.RedirectTo]);
        }
      }
    );
  }


}
