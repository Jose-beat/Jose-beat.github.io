import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';

import { Alert } from '../../../../shared/utilities/alert.utilities';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements OnDestroy{

  constructor(
    private formBuilder : FormBuilder,
    private authService: AuthService,
    private router : Router
  ){}
  ngOnDestroy(): void {
  }


  public response? : ITransaction<User>;
  public authResponse? : ITransaction<User>;
  public user : User = new User('','','','','');
  public formSignUp : FormGroup = this.formBuilder.group({
    Name: [],
    LastName: [],
    Email: [],
    Username: [],
    Password : [] ,
    Icon: []
  });


  async Submit(): Promise<void>{

    console.info(this.user);

    this.user =  Utilities.formObjectT<User>(this.formSignUp, this.user);

    this.authResponse = await this.authService.CreateUserAuth<User>(this.user);

    if(this.authResponse.Error === true){

      // console.log("ERROR AL CREAR AL USUARIO: " + this.authResponse.Message);
      Alert.sweetAlert(this.authResponse).then();
      return;
    };

    this.response = await this.authService.CreateUser<User>(this.user);

    if(this.response.Error === true){
      console.log("ERROR AL CREAR AL USUARIO EN LA DB: " + this.response.Message);

      console.log("Eliminando usuario: " + (await this.authService.DeleteUser()).Success);
      Alert.sweetAlert(this.response).then();
      // Alert.sweetAlert(this.response);
      return;
    };

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

}
