import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashPageComponent } from './pages/dash-page/dash-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { VerificationAccountPageComponent } from './pages/verification-account-page/verification-account-page.component';
import { ComponentsModule } from './components/components.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ExperienceModalComponent } from './modals/experience-modal/experience-modal.component';
import { ModalsModule } from './modals/modals.module';



@NgModule({
  declarations: [
    DashPageComponent,
    ProjectPageComponent,
    CatalogPageComponent,
    HomePageComponent,
    VerificationAccountPageComponent,
    ProfilePageComponent,
    ExperiencePageComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    AdminRoutingModule,
    ModalsModule,
    SharedModule

  ]
})
export class AdminModule { }
