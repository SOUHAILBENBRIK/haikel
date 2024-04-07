import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { HomeModule } from '../home/home.module';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { ManufacturersignupComponent } from './manufacturersignup/manufacturersignup.component';
import { LayoutauthComponent } from './layoutauth/layoutauth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerifComponent } from './otp-verif/otp-verif.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    CustomersignupComponent,
    ManufacturersignupComponent,
    LayoutauthComponent,
    OtpVerifComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
