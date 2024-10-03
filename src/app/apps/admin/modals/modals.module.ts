import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExperienceModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    ExperienceModalComponent
  ]
})
export class ModalsModule { }
