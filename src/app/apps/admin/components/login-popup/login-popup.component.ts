import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthTransaction } from '../../../auth/providers/transaction/AuthTransaction.class';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../shared/validator/validator.service';
import { FormUtilities } from '../../../../shared/utilities/form.utilities';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'admin-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent {

  @Output() loginResponse = new EventEmitter<ITransaction<User> | null>();


  constructor(
    private authService : AuthService,
    private dataService : DataService,
    private formBuilder : FormBuilder,
    private validatorService : ValidatorsService
  ){}
  public response? : ITransaction<User>;
  public FormVerifyLogin : FormGroup = this.formBuilder.group({
    Verify_Email : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    Verify_Password : ['', [Validators.required]]
  });
  public validatorUtilities : FormUtilities = new FormUtilities(this.FormVerifyLogin);



  async submit(){
    this.response = await this.authService.Login<User>(this.FormVerifyLogin.value.Verify_Email,this.FormVerifyLogin.value.Verify_Password);
    console.warn("RESPUESTA DE SUBMIT");
    console.warn(this.response);
    //let response =  AuthTransaction.OnSuccess<User>("Sesion Verificada", "",undefined);
    this.loginResponse.emit(this.response);
    this.dataService.activeForm(false);
  }

}
