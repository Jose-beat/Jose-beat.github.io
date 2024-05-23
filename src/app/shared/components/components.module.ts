import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { ComponentsMaterialModule } from '../components-material/components-material.module';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsMaterialModule
  ],
  exports: [
    PopupComponent
  ]
})
export class ComponentsModule { }
