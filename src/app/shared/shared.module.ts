import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { ComponentsMaterialModule } from './components-material/components-material.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsMaterialModule,
    ComponentsModule,
  ],
  exports: [

    ComponentsMaterialModule,
    ComponentsModule,
  ]
})
export class SharedModule { }
