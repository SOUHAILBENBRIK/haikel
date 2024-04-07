import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';
import { FooterblackComponent } from './footerblack/footerblack.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { FooterBlogComponent } from './footer-blog/footer-blog.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    FooterblackComponent,
    AboutUsComponent,
    BlogComponent,
    FooterBlogComponent,
    GetStartedComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    HomeModule
  ]
})
export class CompanyModule { }
