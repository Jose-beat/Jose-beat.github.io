import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BriefPageComponent } from './pages/brief-page/brief-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WebRoutingModule } from './web-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    BriefPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule

  ]
})
export class WebModule { }
