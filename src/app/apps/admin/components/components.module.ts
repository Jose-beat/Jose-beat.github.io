import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { RouterModule } from '@angular/router';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminNavbarComponent,
    LoginPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    AdminNavbarComponent,
    LoginPopupComponent
  ]
})
export class ComponentsModule { }
