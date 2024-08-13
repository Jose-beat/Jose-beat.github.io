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

  }
  private idUser : string = this.authService.GetCurrentUserId() ;
  private experience : Experience =  new Experience('', this.idUser,'','',1,null, '',undefined, undefined);

  public formExperience : FormGroup = this.formBuilder.group({
    Name: ['', [Validators.required]],
    Description: ['', [Validators.required]]
  });


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

}
