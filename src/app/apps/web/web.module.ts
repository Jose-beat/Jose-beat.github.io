import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BriefPageComponent } from './pages/brief-page/brief-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WebRoutingModule } from './web-routing.module';

import { SharedModule } from '../../shared/shared.module';


import { ResumePageComponent } from './pages/resume-page/resume-page.component';

import { ComponentsModule } from './components/components.module';





@NgModule({
  declarations: [
    HomePageComponent,
    BriefPageComponent,
    ContactPageComponent,
    ResumePageComponent,


  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    //* My component module
    SharedModule,
    ComponentsModule

  ]
})
export class WebModule { }
