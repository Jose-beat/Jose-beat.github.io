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
    private authService : AuthService,
    private adminService : AdminService,
    private loadingService : LoadingService
  ){}

  ngOnInit(): void {
    this.getExpecience();
  }
  private idUser : string = this.authService.GetCurrentUserId() ;
  public defaultExperience : Experience  =  new Experience('', this.idUser,'','',1,null, '',undefined, undefined);
  public experience : Experience =  new Experience('', this.idUser,'','',1,null, '',undefined, undefined);
  public action : ModalItem = {typeAction: "create", color: "success", genericTag: "Crear", formTag: ""};
  public listExperience : Experience[]  = [];
  public columndefs : string[] =  [ "name","description",  "state", "actions"];

  public ActionItems : ModalItem[] = [
    {typeAction: "create", color: "success", genericTag: "Crear", formTag: ""},
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

  setExperience(experience : Experience,action : ModalItem){
      this.experience = {... experience}
      this.action = {... action};
  }

  setExperienceList(experiences : Experience[]){
    this.listExperience = experiences;
  }

}
