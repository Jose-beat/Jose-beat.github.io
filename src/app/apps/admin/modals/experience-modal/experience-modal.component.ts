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
      startDate : [''],
      endDate : [''],
      description: ['', [Validators.required]]
    });
  }

  public formExperience : FormGroup;
  private idUser : string = this.authService.GetCurrentUserId() ;
  @Input()
  public modalComponent! : ModalItem;

  @Input()
  public experience : Experience = new Experience('', this.idUser,'','',1,null, '',undefined, undefined);

  @Output() updateExperiences  = new EventEmitter<Experience[]>();

  public disableInput : boolean = false;
  public defaultExperience : Experience = new Experience('', this.idUser,'','',1,null, '',undefined, undefined);

  ngOnChanges(changes: SimpleChanges): void {
    const regex = /\b[e|c]\w*/g;
    if (changes['experience'] && this.experience) {

      this.formExperience.patchValue(this.experience); // Actualiza el formulario con los datos del padre

      if(!this.modalComponent.typeAction.match(regex)){
        Object.keys(this.formExperience.controls).forEach(key => {
            this.formExperience.controls[key].disable();
        });

      }

    }


  }

  async createExperience() : Promise<void>{
    this.loadingService.loadingOn();
    this.defaultExperience  = Utilities.formObjectT<Experience>(this.formExperience, this.defaultExperience);
    console.error(this.defaultExperience);
    this.adminService.Create<Experience>(this.defaultExperience)
    .then((response)=>{
        this.loadingService.loadingOff();
        Alert.sweetAlert(response);

    });
    this.getExpecience();
    this.defaultExperience = new Experience('', this.idUser,'','',1,null, '',undefined, undefined);
    this.formExperience.reset();
    console.error("submit");
    console.warn(this.defaultExperience);
  }
  async deleteExperience() : Promise<void>{
    this.loadingService.loadingOn();
    this.defaultExperience  = Utilities.formObjectT<Experience>(this.formExperience, this.defaultExperience);
    console.error(this.defaultExperience);
    this.adminService.Create<Experience>(this.defaultExperience)
    .then((response)=>{
        this.loadingService.loadingOff();
        Alert.sweetAlert(response);

    });
    this.getExpecience();
    this.defaultExperience = new Experience('', this.idUser,'','',1,null, '',undefined, undefined);
    this.formExperience.reset();
    console.error("submit");
    console.warn(this.defaultExperience);
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
    if (this.formExperience.valid) {
      switch(typeAction){
        case "create":
          await this.createExperience();
          break;
        case "edit":
          await this.createExperience();
          break;
        case "delete":
          break;
        default:
          console.warn("Action not implemented");
      }
      this.getExpecience();

    }

  }


}
