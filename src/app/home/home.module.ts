import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { WhyusComponent } from './whyus/whyus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CtaComponent } from './cta/cta.component';
import { register } from 'swiper/element/bundle';
import { ParallaxgfxComponent } from './parallaxgfx/parallaxgfx.component';
import { UsComponent } from './us/us.component';
import { MapComponent } from './map/map.component';
import { SystmecommendComponent } from './systmecommend/systmecommend.component';
// import Swiper styles
register();


@NgModule({
  declarations: [
               NavbarComponent,
               HeroComponent,
               HomelayoutComponent,
               FooterComponent,
               ContactComponent,
               BrandsComponent,
               CategoriesComponent,
               WhyusComponent,
               AboutusComponent,
               CtaComponent,
               ParallaxgfxComponent,
               UsComponent,
               MapComponent,
               SystmecommendComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ],
  exports:[
    NavbarComponent,
    HomelayoutComponent,
    FooterComponent,
    AboutusComponent
    
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
