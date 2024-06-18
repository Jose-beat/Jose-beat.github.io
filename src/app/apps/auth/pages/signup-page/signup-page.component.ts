import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';
import { IAuthTransaction } from '../../interfaces/IAuthTransaction.interface';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  constructor(
    private formBuilder : FormBuilder,
    private authService: AuthService,
  ){}


  public response? : ITransaction<User>;
  public authResponse? : IAuthTransaction<User>;
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

    if(this.authResponse.Error === true || this.authResponse.Success === false){
      console.log("ERROR AL CREAR AL USUARIO: " + this.authResponse.Message);
      return;
    };

    this.response = await this.authService.CreateUser<User>(this.user);

    if(this.response.Error === true){
      console.log("ERROR AL CREAR AL USUARIO EN LA DB: " + this.response.Message);

      console.log("Eliminando usuario: " + (await this.authService.DeleteUser()).Success);
      return;
    };





  }

}
