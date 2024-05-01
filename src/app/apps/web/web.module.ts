import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BriefPageComponent } from './pages/brief-page/brief-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WebRoutingModule } from './web-routing.module';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    HomePageComponent,
    BriefPageComponent,
    ContactPageComponent,

  ],
  imports: [
    CommonModule,
    WebRoutingModule,

    MatExpansionModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class WebModule { }
