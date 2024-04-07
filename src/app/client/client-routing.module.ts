import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCComponent } from './home-c/home-c.component';
import { LayoutclientComponent } from './layoutclient/layoutclient.component';
import { ProfileCComponent } from './profile-c/profile-c.component';
import { AccountNotificationsCComponent } from './account-notifications-c/account-notifications-c.component';
import { AccountSecurityCComponent } from './account-security-c/account-security-c.component';
import { AccountMessagesCComponent } from './account-messages-c/account-messages-c.component';
import { AccountCollectionsCComponent } from './account-collections-c/account-collections-c.component';
import { AccountSavedItemsCComponent } from './account-saved-items-c/account-saved-items-c.component';
import { AccountPaymentCComponent } from './account-payment-c/account-payment-c.component';
import { AsideComponent } from './aside/aside.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  //{path: "", component: HomeCComponent }, 

  {path : 'dashboard', component: LayoutclientComponent, children:[
    {path:'dashboard' , redirectTo:'', pathMatch: 'full'},
    {path: "profile", component: ProfileCComponent }, 
    {path:"account-security", component: AccountSecurityCComponent},
    {path:"account-notifications", component: AccountNotificationsCComponent},
    {path:"account-messages", component: AccountMessagesCComponent},
    {path:"account-collections", component: AccountCollectionsCComponent},
    {path:"account-saved", component: AccountSavedItemsCComponent},
    {path:"account-payment", component: AccountPaymentCComponent},
    {path:"aside", component: AsideComponent},
  ]},
  {path:"quotes", component: QuotesComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
