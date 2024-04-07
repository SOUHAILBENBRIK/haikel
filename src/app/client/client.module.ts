import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfileCComponent } from './profile-c/profile-c.component';
import { HomelayoutComponent } from '../home/homelayout/homelayout.component';
import { HomeModule } from '../home/home.module';
import { HomeCComponent } from './home-c/home-c.component';
import { NavbarCComponent } from './navbar-c/navbar-c.component';
import { LayoutclientComponent } from './layoutclient/layoutclient.component';
import { FooterCComponent } from './footer-c/footer-c.component';
import { AccountNotificationsCComponent } from './account-notifications-c/account-notifications-c.component';
import { AccountSecurityCComponent } from './account-security-c/account-security-c.component';
import { AccountMessagesCComponent } from './account-messages-c/account-messages-c.component';
import { AccountCollectionsCComponent } from './account-collections-c/account-collections-c.component';
import { AccountSavedItemsCComponent } from './account-saved-items-c/account-saved-items-c.component';
import { AccountPaymentCComponent } from './account-payment-c/account-payment-c.component';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from './aside/aside.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { QuotesComponent } from './quotes/quotes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfileCComponent,
    HomeCComponent,
    NavbarCComponent,
    LayoutclientComponent,
    FooterCComponent,
    AccountNotificationsCComponent,
    AccountSecurityCComponent,
    AccountMessagesCComponent,
    AccountCollectionsCComponent,
    AccountSavedItemsCComponent,
    AccountPaymentCComponent,
    AsideComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    FormsModule,
    NgxDropzoneModule,
    NgxPaginationModule,
    HttpClientModule
    
    
  ],
  bootstrap: [],

  exports:[FooterCComponent]
})
export class ClientModule { }
