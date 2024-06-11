import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { DashPageComponent } from './apps/admin/pages/dash-page/dash-page.component';
import { ProjectPageComponent } from './apps/admin/pages/project-page/project-page.component';
import { CatalogPageComponent } from './apps/admin/pages/catalog-page/catalog-page.component';
import { HomePageComponent } from './apps/admin/pages/home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
