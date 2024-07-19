import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { Utilities } from '../../../../shared/utilities/table.utilities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../shared/validator/validator.service';
import { LoadingService } from '../../../../shared/services/global/loading.service';
import { FormUtilities } from '../../../../shared/utilities/form.utilities';
import { Alert } from '../../../../shared/utilities/alert.utilities';

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

  public user : User = new User("","","","","","", null,"");
  public response? : ITransaction<User>;
  public authResponse? : ITransaction<User>;
  public formProfile : FormGroup = this.formBuilder.group({
    Name: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    LastName: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    Email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    Username: ['', [Validators.required]],
    Password : ['', [Validators.required]],
  });
  public validatorUtilities : FormUtilities = new FormUtilities(this.formProfile);
  async ngOnInit(): Promise<void> {
    await this.getDataProfile();

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
        // this.populateForm(this.user);
        this.formProfile.reset(this.user);
        this.loaderService.loadingOff();

      });
      console.log(this.user);
    }

  }

  onFileChange(event : Event){
    this.user =  this.validatorUtilities.onFileChange<User>(this.user, event, true);
  }

  async submit() : Promise<void>{

    this.loaderService.loadingOn();

    this.user = Utilities.formObjectT<User>(this.formProfile, this.user);
    //TODO: Ver manera de evitar la asignacion de datos desde el componente.
    this.user.UpdateDate = Date.now()
    await this.authService.UpdateUserAuth<User>(this.user)
    .then(async (authResponse)=>{

      console.error(authResponse.Message);

      if(!authResponse.Error){
        await this.authService.CreateUser(this.user)
        .then((dbResponse)=>{

          if(!dbResponse.Error){
            this.loaderService.loadingOff();
            Alert.sweetAlert(dbResponse)
            .then(async(result)=>{
              if(result.isConfirmed){
                await this.getDataProfile();
              }
            });
          }else{
            this.loaderService.loadingOff();
            Alert.sweetAlert(dbResponse);
          }

          })

      }else{
        this.loaderService.loadingOff();
        Alert.sweetAlert(authResponse);
      }

    })
    .catch((error)=>{
      this.loaderService.loadingOff();
      console.log(error);
    });
  }


}
