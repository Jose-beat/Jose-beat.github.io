import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from '../../../../shared/model/Experience.model';
import { Utilities } from '../../../../shared/utilities/table.utilities';
import { AuthService } from '../../../auth/services/auth.service';
import { FirebaseDB } from '../../../../shared/factory/providers/FirebaseDB.provider';
import { AdminService } from '../../services/admin.service';
import { Alert } from '../../../../shared/utilities/alert.utilities';
import { LoadingService } from '../../../../shared/services/global/loading.service';


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
  private experience : Experience =  new Experience('', this.idUser,'','',1,null, '',undefined, undefined);
  public listExperience : Experience[]  = [];

  public formExperience : FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  getExpecience() : void {
    this.loadingService.loadingOn();
    this.adminService.GetAll(Experience)
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
    console.error("submit");
    console.warn(this.experience);

  }

  getStatus(status : number, type: string) : string {
    let state =  Utilities.getStatusDescription(status, type);
    return `<span class=badge text-bg-${state.color}>${state.title}</span>`;

  }

}
