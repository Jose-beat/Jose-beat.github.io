import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';

import { Alert } from '../../../../shared/utilities/alert.utilities';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../../../shared/validator/validator.service';
import { FormUtilities } from '../../../../shared/utilities/form.utilities';

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
  public validatorUtilities : FormUtilities = new FormUtilities(this.formSignUp);

  async submit(): Promise<void>{

    this.loader = true;
    console.info(this.user);



    this.user =  Utilities.formObjectT<User>(this.formSignUp, this.user);

    await Promise.all([this.authService.CreateUserAuth<User>(this.user), this.authService.CreateUser<User>(this.user)])
                  .then(async (responses)=>{
                      this.authResponse = responses[0];
                      this.response = responses[1];

                      this.loader = false;
                      if(this.authResponse.Error){
                        Alert.sweetAlert(this.authResponse);
                        return;
                      }

                      if(this.response.Error){
                        await this.authService.DeleteUser();
                        Alert.sweetAlert(this.response);
                        return;
                      }
                      Alert.sweetAlert(this.response).then(
                          (result)=>{
                            if(result.isConfirmed){
                              this.authService.Logout().subscribe(
                                (logout)=>{
                                  if(!logout) console.log("Error al desloguear al usuario");
                                  this.router.navigate([this.response?.RedirectTo]);
                                }
                              );


                            }
                          }
                        );

                  });
  }




}
