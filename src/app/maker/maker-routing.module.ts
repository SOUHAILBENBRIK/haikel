import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutmakerComponent } from './layoutmaker/layoutmaker.component';
import { HomeMComponent } from './home-m/home-m.component';
import { ProfileMComponent } from './profile-m/profile-m.component';
import { NavbarCComponent } from '../client/navbar-c/navbar-c.component';
import { AccountSecurityMComponent } from './account-security-m/account-security-m.component';
import { AccountNotificationsMComponent } from './account-notifications-m/account-notifications-m.component';
import { AccountMessagesMComponent } from './account-messages-m/account-messages-m.component';
import { AccountSavedItemsMComponent } from './account-saved-items-m/account-saved-items-m.component';
import { AccountCollectionsMComponent } from './account-collections-m/account-collections-m.component';
import { AccountPaymentMComponent } from './account-payment-m/account-payment-m.component';

const routes: Routes =[


{path : 'dashboard', component: LayoutmakerComponent, children:[
  {path:'dashboard' , redirectTo:'', pathMatch: 'full'},
  {path: "profile", component: ProfileMComponent }, 
  {path:"account-security", component: AccountSecurityMComponent},
  {path:"account-notifications", component: AccountNotificationsMComponent},
  {path:"account-messages", component: AccountMessagesMComponent},
  {path:"account-collections", component: AccountCollectionsMComponent},
  {path:"account-saved", component: AccountSavedItemsMComponent},
  {path:"account-payment", component: AccountPaymentMComponent},
  {path:"manufacturer", loadChildren:()=>import('./manufacturer/manufacturer.module').then(m=>m.ManufacturerModule) },



]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerRoutingModule { }
