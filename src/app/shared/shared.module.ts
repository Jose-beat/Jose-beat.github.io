import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ComponentsMaterialModule } from './components-material/components-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ComponentsMaterialModule
  ],
  exports: [
    ComponentsModule,
    ComponentsMaterialModule
  ]
})
export class SharedModule { }
