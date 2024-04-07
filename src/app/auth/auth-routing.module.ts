import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutauthComponent } from './layoutauth/layoutauth.component';
import { ManufacturersignupComponent } from './manufacturersignup/manufacturersignup.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpVerifComponent } from './otp-verif/otp-verif.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path : '', component: LayoutauthComponent, children:[
    {path:'' , redirectTo:'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent },
    {path:"register" , component:RegisterComponent},
    {path:"reset-password", component:ForgetPasswordComponent},
    { path: 'reset-password/verify', component: OtpVerifComponent }, // Ajouter cette ligne
    { path: 'reset-password/set', component: ResetPasswordComponent }, // Ajouter cette ligne
    { path: 'register/manufacturer', component: ManufacturersignupComponent },
    { path: 'register/customer', component: CustomersignupComponent }
  ]}
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
