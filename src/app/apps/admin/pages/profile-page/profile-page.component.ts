import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../shared/validator/validator.service';
import { LoadingService } from '../../../../shared/services/global/loading.service';

@Component({
  selector: 'admin-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  constructor(
    private authService : AuthService,
    private formBuilder : FormBuilder,
    private validatorService : ValidatorsService,
    private loaderService : LoadingService
  ){}

  public user : User = new User("","","","","","");
  public response? : ITransaction<User>;
  public authResponse? : ITransaction<User>;
  public formLogIn : FormGroup = this.formBuilder.group({
    Name: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    LastName: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    Email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    Username: ['', [Validators.required]],
    Password : ['', [Validators.required]] ,
    Icon: []
  });

  async ngOnInit(): Promise<void> {

    await this.getDataProfile();

  }

  populateForm(user: User): void {
      this.formLogIn.patchValue({
        Name: user.Name,
        LastName: user.LastName,
        Email: user.Email,
        Username: user.Username,
        Password : user.Password,
        Icon: user.Icon
      });
  }

  async getDataProfile(): Promise<void>{
    this.loaderService.loadingOn();

    this.authResponse = this.authService.GetUserAuth<User>(this.user);
    if(!this.authResponse.Error){
      let id = this.authResponse.ModelObject!.Id;
      console.log("Mi ID : " + id);
      await this.authService.GetById<User>(id, User).then((response)=>{

        // console.log(typeof(response.ModelObject));
        let object = response.ModelObject as User;

        this.user = Utilities.combineWithUser(this.user, object);
        this.populateForm(this.user);
        this.loaderService.loadingOff();

      });
      console.log(this.user);
    }

  }

}
