import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';

import { Alert } from '../../../../shared/utilities/alert.utilities';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../../../shared/validator/validator.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  constructor(
    private formBuilder : FormBuilder,
    private authService: AuthService,
    private router : Router,
    private validatorService : ValidatorsService
  ){}



  public response? : ITransaction<User>;
  public authResponse? : ITransaction<User>;
  public user : User = new User('','','','','');
  public loader : boolean = false;

  public formSignUp : FormGroup = this.formBuilder.group({
    Name: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    LastName: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    Email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    Username: ['', [Validators.required]],
    Password : ['', [Validators.required]] ,
    Icon: []
  });


  async submit(): Promise<void>{
    this.loader = true;
    console.info(this.user);

    this.user =  Utilities.formObjectT<User>(this.formSignUp, this.user);

    this.authResponse = await this.authService.CreateUserAuth<User>(this.user);

    if(this.authResponse.Error === true){

      // console.log("ERROR AL CREAR AL USUARIO: " + this.authResponse.Message);
      this.loader = false;
      Alert.sweetAlert(this.authResponse).then(()=>this.loader = false);

      return;
    };

    this.response = await this.authService.CreateUser<User>(this.user);

    if(this.response.Error === true){
      console.log("ERROR AL CREAR AL USUARIO EN LA DB: " + this.response.Message);

      console.log("Eliminando usuario: " + (await this.authService.DeleteUser()).Success);
      this.loader = false;
      Alert.sweetAlert(this.response).then();
      // Alert.sweetAlert(this.response);
      return;
    };
    this.loader = false;
    Alert.sweetAlert(this.response).then(
      (result)=>{
        if(result.isConfirmed){
          const logout = this.authService.Logout().subscribe(
            (logout)=>{
              if(!logout) console.log("Error al desloguear al usuario");
              this.router.navigate([this.response?.RedirectTo]);
            }
          );


        }
      }
    );



  }


  isValidField(field: string){
    //TODO: Servicio para validacion
    return this.validatorService.isValidField(this.formSignUp, field);
  }

}
