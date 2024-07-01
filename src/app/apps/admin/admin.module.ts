import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashPageComponent } from './pages/dash-page/dash-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { VerificationAccountPageComponent } from './pages/verification-account-page/verification-account-page.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    DashPageComponent,
    ProjectPageComponent,
    CatalogPageComponent,
    HomePageComponent,
    VerificationAccountPageComponent,


  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
