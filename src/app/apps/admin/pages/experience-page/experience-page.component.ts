import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from '../../../../shared/model/Experience.model';
import { Utilities } from '../../../../shared/utilities/table.utilities';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent implements OnInit{



  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService
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

    this.experience = Utilities.formObjectT<Experience>(this.formExperience, this.experience);

    console.error("submit");
    console.warn(this.experience);

  }

}
