import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { ComponentsMaterialModule } from './components-material/components-material.module';
import { GlobalService } from './services/global/global.service';
import { WebService } from './services/web/web.service';
import { ErrorPageComponent } from './pages/error-page/error-page.component';



@NgModule({
  declarations: [

    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsMaterialModule,
    ComponentsModule,
  ],
  exports: [

    ComponentsMaterialModule,
    ComponentsModule,
    ErrorPageComponent
  ],
  providers: [
    GlobalService,
    WebService
  ]
})
export class SharedModule { }
