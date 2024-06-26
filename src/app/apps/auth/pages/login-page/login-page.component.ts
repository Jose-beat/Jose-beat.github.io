import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../shared/validator/validator.service';
import { Alert } from '../../../../shared/utilities/alert.utilities';
import { ITransaction } from '../../../../shared/interfaces/ITransaction.interface';
import { User } from '../../../../shared/model/User.model';
import { AuthTransaction } from '../../providers/transaction/AuthTransaction.class';
import { Router } from '@angular/router';

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
    private validatorService : ValidatorsService
  ){}

  public response? : ITransaction<User>;
  public loader : boolean = false;
  public formLogin : FormGroup = this.formBuilder.group({
    Email : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    Password : ['', [Validators.required]]
  })
  async logIn(){
    this.loader = true;
    this.response = await this.authService.Login<User>(this.formLogin.value.Email, this.formLogin.value.Password);

    if(this.response.Error){
      this.loader = false;
      Alert.sweetAlert(this.response).then();
      return;
    }
    this.loader = false;
    Alert.sweetAlert(this.response).then(
      (result)=>{
        if(result.isConfirmed){
          this.router.navigate([this.response?.RedirectTo]);
        }
      }
    );
  }

  isValidField(field: string){
    //TODO: Servicio para validacion
    return this.validatorService.isValidField(this.formLogin, field);
  }
}
