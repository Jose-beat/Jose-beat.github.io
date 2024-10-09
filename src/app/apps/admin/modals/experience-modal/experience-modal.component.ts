import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModalItem } from '../../../../shared/interfaces/component-interfaces/ModalItem.interface';
import { Experience } from '../../../../shared/model/Experience.model';
import { AuthService } from '../../../auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { LoadingService } from '../../../../shared/services/global/loading.service';
import { Utilities } from '../../../../shared/utilities/table.utilities';
import { Alert } from '../../../../shared/utilities/alert.utilities';


@Component({
  selector: 'admin-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrl: './experience-modal.component.css'
})
export class ExperienceModalComponent implements OnChanges{
  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private adminService : AdminService,
    private loadingService : LoadingService
  ){
    console.log(this.modalComponent);
    this.formExperience = this.formBuilder.group({
      name: [{value: '', disabled: false}, [Validators.required]],
      description: ['', [Validators.required]],
      startDate : [''],
      endDate : [''],
      workingNow : [this.workingNow]
    });
  }

  public formExperience : FormGroup;
  private idUser : string = this.authService.GetCurrentUserId() ;
  @Input()
  public modalComponent! : ModalItem;

  @Input()
  public experience : Experience = new Experience('', this.idUser,'','','','',false,1,null, '',undefined, undefined);

  @Output() updateExperiences  = new EventEmitter<Experience[]>();

  public workingNow : boolean = false;


  ngOnChanges(changes: SimpleChanges): void {
    const regex = /\b[e|c]\w*/g;
    if (changes['experience'] && this.experience) {

      this.formExperience.patchValue(this.experience); // Actualiza el formulario con los datos del padre
      this.setEndDate(this.experience.workingNow);
      if(!this.modalComponent.typeAction.match(regex)){
        Object.keys(this.formExperience.controls).forEach(key => {
            this.formExperience.controls[key].disable();
        });

      }

    }


  }

  async createExperience(ExperienceModel : Experience) : Promise<void>{
    this.loadingService.loadingOn();
//    this.nowExperiencie  = Utilities.formObjectT<Experience>(this.experience, this.nowExperiencie);
    console.error(ExperienceModel);
    await this.adminService.Create<Experience>(Experience,ExperienceModel)
    .then((response)=>{
        this.loadingService.loadingOff();
        Alert.sweetAlert(response);
    });
    this.getExpecience();
    this.experience = new Experience('', this.idUser,'','','','',false,1,null, '',undefined, undefined);
    this.formExperience.reset();
    console.error("submit");
    console.warn(ExperienceModel);
  }
  async deleteExperience() : Promise<void>{

  }

  getExpecience() : void {
    this.loadingService.loadingOn();
    this.adminService.GetAll(Experience, "idUser", this.idUser)
    .subscribe((response)=>{
      this.loadingService.loadingOff();
      //Alert.sweetAlert(response);
      if(!response.Error){
          if(response.ListObject !== undefined){
            this.updateExperiences.emit(response.ListObject);
            //console.error(this.listExperience.toString());
          }
      }else{
        Alert.sweetAlert(response);
      }
      console.warn(response);
    });
  }

  async submit(typeAction : string) : Promise<void>{

    let newExperience : Experience = new Experience(
      this.experience.id,
      this.experience.idUser,
      this.formExperience.value['name'],
      this.formExperience.value['description'],
      this.formExperience.value['startDate'],
      this.formExperience.value['endDate'],
      this.formExperience.value['workingNow'],
      this.experience.state,
      null,
      this.experience.imagePath,
      this.experience.updateDate,
      this.experience.createDate

    );

    console.error(newExperience);
    if (this.formExperience.valid) {
      switch(typeAction){
        case "create":
          console.warn(typeof this.experience);
          await this.createExperience(this.experience);
          break;
        case "edit":
          console.warn(typeof this.experience);
          await this.createExperience(newExperience);
          break;
        case "delete":
          break;
        default:
          console.warn("Action not implemented");
      }
      this.getExpecience();

    }

  }

  setEndDate(workingNow? : boolean) : void{
    console.log(workingNow);
    this.workingNow = workingNow === undefined ? !this.workingNow : workingNow;
    if(this.workingNow){
          this.formExperience.controls['endDate'].disable();
    }
    else{
          this.formExperience.controls['endDate'].enable();
    }

        console.warn(this.workingNow);
    // if (workingNow !== undefined) {
    //   if(workingNow){

    //     this.formExperience.controls['endDate'].disable();
    //   }
    //   else{
    //     this.formExperience.controls['endDate'].enable();
    //   }

    //   console.warn(this.workingNow);

    // } else {
    //   this.workingNow = !this.workingNow;
    // if(this.workingNow){

    //   this.formExperience.controls['endDate'].disable();
    // }
    // else{
    //   this.formExperience.controls['endDate'].enable();
    // }

    //   console.warn(this.workingNow);

    // }


  }

}
