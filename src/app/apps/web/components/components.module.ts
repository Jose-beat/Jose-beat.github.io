import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterLink, RouterModule } from '@angular/router';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { ViewerItemComponent } from './viewer-item/viewer-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsMaterialModule } from '../../../shared/components-material/components-material.module';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { ProgressListItemComponent } from './progress-list-item/progress-list-item.component';
import { ProjectItemComponent } from './project-item/project-item.component';




@NgModule({
  declarations: [
    NavBarComponent,
    ProfileButtonComponent,
    AccordionItemComponent,
    ViewerItemComponent,
    ListItemComponent,
    TabItemComponent,
    ProgressListItemComponent,
    ProjectItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsMaterialModule
  ],
  exports: [
    NavBarComponent,
    ProfileButtonComponent,
    AccordionItemComponent,
    ViewerItemComponent,
    ListItemComponent,
    TabItemComponent,
    ProgressListItemComponent,
    ProjectItemComponent
  ]
})
export class ComponentsModule { }
