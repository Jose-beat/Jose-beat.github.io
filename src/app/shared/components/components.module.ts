import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { ComponentsMaterialModule } from '../components-material/components-material.module';
import { LoaderComponent } from './loader/loader.component';
import { BadgeComponent } from './badge/badge.component';



@NgModule({
  declarations: [
    PopupComponent,
    LoaderComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsMaterialModule
  ],
  exports: [
    PopupComponent,
    LoaderComponent,
    BadgeComponent
  ]
})
export class ComponentsModule { }
