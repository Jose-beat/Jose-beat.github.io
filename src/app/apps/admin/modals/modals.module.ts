import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';



@NgModule({
  declarations: [
    ExperienceModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ExperienceModalComponent
  ]
})
export class ModalsModule { }
