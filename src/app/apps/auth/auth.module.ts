import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
