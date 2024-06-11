import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashPageComponent } from './pages/dash-page/dash-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';



@NgModule({
  declarations: [
    DashPageComponent,
    ProjectPageComponent,
    CatalogPageComponent,
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
