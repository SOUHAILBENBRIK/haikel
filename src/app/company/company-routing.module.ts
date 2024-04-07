import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../home/contact/contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
    {path: "contact-us", component: ContactUsComponent },
    {path: "about-us", component: AboutUsComponent },
    {path: "blog", component: BlogComponent },
    {path: "get-started", component: GetStartedComponent },
    {path: "help-center", component: FaqComponent }




      
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
