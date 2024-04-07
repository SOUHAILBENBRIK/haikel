import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakerRoutingModule } from './maker-routing.module';
import { ProfileMComponent } from './profile-m/profile-m.component';
import { HomeMComponent } from './home-m/home-m.component';
import { HomeModule } from '../home/home.module';
import { FooterMComponent } from './footer-m/footer-m.component';
import { NavbarMComponent } from './navbar-m/navbar-m.component';
import { LayoutmakerComponent } from './layoutmaker/layoutmaker.component';
import { AccountSecurityMComponent } from './account-security-m/account-security-m.component';
import { AccountNotificationsMComponent } from './account-notifications-m/account-notifications-m.component';
import { AccountMessagesMComponent } from './account-messages-m/account-messages-m.component';
import { AccountSavedItemsMComponent } from './account-saved-items-m/account-saved-items-m.component';
import { AccountCollectionsMComponent } from './account-collections-m/account-collections-m.component';
import { AccountPaymentMComponent } from './account-payment-m/account-payment-m.component';
import { FormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/ng';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AsideComponent } from './aside/aside.component';


@NgModule({
  declarations: [
    ProfileMComponent,
    HomeMComponent,
    FooterMComponent,
    NavbarMComponent,
    LayoutmakerComponent,
    AccountSecurityMComponent,
    AccountNotificationsMComponent,
    AccountMessagesMComponent,
    AccountSavedItemsMComponent,
    AccountCollectionsMComponent,
    AccountPaymentMComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    MakerRoutingModule,
    HomeModule,
    FormsModule,
    CloudinaryModule,
    NgxDropzoneModule
    
    
  ]
})
export class MakerModule { }
