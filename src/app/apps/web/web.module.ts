import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BriefPageComponent } from './pages/brief-page/brief-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WebRoutingModule } from './web-routing.module';
import { PopupComponent } from './components/popup/popup.component';
import { SharedModule } from '../../shared/shared.module';





@NgModule({
  declarations: [
    HomePageComponent,
    BriefPageComponent,
    ContactPageComponent,
    PopupComponent,

  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule
  ]
})
export class WebModule { }
