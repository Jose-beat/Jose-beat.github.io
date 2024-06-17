import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';

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
  public user : User = new User('','','','','');
  public formSignUp : FormGroup = this.formBuilder.group({
    Name: [],
    LastName: [],
    Email: [],
    Username: [],
    Password : [] ,
    Icon: []
  });


  Submit(): void{

    console.info(this.user);

    this.user =  Utilities.formObjectT<User>(this.formSignUp, this.user);

    this.authService.CreateUserAuth<User>(this.user).then(
      (AuthResponse)=>{

        this.authService.CreateUser(this.user)
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  }

}
