import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';

import { Alert } from '../../../../shared/utilities/alert.utilities';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../../../shared/validator/validator.service';
import { FormUtilities } from '../../../../shared/utilities/form.utilities';
import { LoadingService } from '../../../../shared/services/global/loading.service';

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
    private validatorService : ValidatorsService,
    private loadingService : LoadingService
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
    Password : ['', [Validators.required]]
  });
  public validatorUtilities : FormUtilities = new FormUtilities(this.formSignUp);

  async submit(): Promise<void>{

    this.loadingService.loadingOn();
    console.error("Formulario :" + this.formSignUp.value);




    this.user =  Utilities.formObjectT<User>(this.formSignUp, this.user);

    await this.authService.CreateUserAuth<User>(this.user).then(async (authResponse)=>{
      if(!authResponse.Error){
        await this.authService.CreateUser<User>(authResponse.ModelObject!).then((dbResponse)=>{
          if(!dbResponse.Error){
            this.loadingService.loadingOff();
            Alert.sweetAlert(dbResponse).then(
                (result)=>{
                  if(result.isConfirmed){
                    this.authService.Logout().subscribe(
                      (logout)=>{
                        if(!logout) console.log("Error al desloguear al usuario");
                        this.router.navigate([dbResponse.RedirectTo]);
                      }
                    );
                  }
                }
              );
          }else{
          this.loadingService.loadingOff();
          this.authService.DeleteUser();
            Alert.sweetAlert(dbResponse);
          }
        });
      }else{
        this.loadingService.loadingOff();
        Alert.sweetAlert(authResponse);
      }


    }).catch((error)=>{
      this.loadingService.loadingOff();
      console.error(error);
    });
  }

  onFileChange(event : any) : void{
    this.user =  this.validatorUtilities.onFileChange<User>(this.user, event);

  }



}
