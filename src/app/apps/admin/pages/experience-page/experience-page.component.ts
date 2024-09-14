import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from '../../../../shared/model/Experience.model';
import { Utilities } from '../../../../shared/utilities/table.utilities';
import { AuthService } from '../../../auth/services/auth.service';
import { AdminService } from '../../services/admin.service';
import { Alert } from '../../../../shared/utilities/alert.utilities';
import { LoadingService } from '../../../../shared/services/global/loading.service';
import { User } from '../../../../shared/model/User.model';
import { ModalItem } from '../../../../shared/interfaces/component-interfaces/ModalItem.interface';


@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent implements OnInit{



  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private adminService : AdminService,
    private loadingService : LoadingService
  ){}

  ngOnInit(): void {
    this.getExpecience();
  }
  private idUser : string = this.authService.GetCurrentUserId() ;
  //private user : User = new User("","","","","","",[],null,"");
  private experience : Experience =  new Experience('', this.idUser,'','',1,null, '',undefined, undefined);
  public listExperience : Experience[]  = [];
  public columndefs : string[] =  [ "name","description",  "state", "actions"];
  public formExperience : FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  public ActionItems : ModalItem[] = [
    {typeAction: "view", color: "primary", genericTag: "Ver", formTag: ""},
    {typeAction: "edit", color: "success", genericTag: "Editar", formTag: ""},
    {typeAction: "delete", color: "danger", genericTag: "Eliminar", formTag: ""},
  ];

  getExpecience() : void {
    this.loadingService.loadingOn();
    this.adminService.GetAll(Experience, "idUser", this.idUser)
    .subscribe((response)=>{
      this.loadingService.loadingOff();
      //Alert.sweetAlert(response);
      if(!response.Error){
          if(response.ListObject !== undefined){
            this.listExperience = response.ListObject;
            //console.error(this.listExperience.toString());
          }
      }else{
        Alert.sweetAlert(response);
      }
      console.warn(response);
    });
  }
  async submit() : Promise<void>{
    this.loadingService.loadingOn();
    this.experience = Utilities.formObjectT<Experience>(this.formExperience, this.experience);

    this.adminService.Create(this.experience)
    .then((response)=>{
        this.loadingService.loadingOff();
        Alert.sweetAlert(response);

    });
    this.getExpecience();
    this.experience = new Experience('', this.idUser,'','',1,null, '',undefined, undefined);
    this.formExperience.reset();
    console.error("submit");
    console.warn(this.experience);

  }




  objetoKeys(): string[] {
    return Object.keys(this.experience);
  }

}
