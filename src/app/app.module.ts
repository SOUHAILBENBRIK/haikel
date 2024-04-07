import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
import { ErrorComponent } from './_utils/error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { ErroprimeComponent } from './_utils/error/erroprime/erroprime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CloudinaryModule } from '@cloudinary/ng';
//import { NgxDropzoneModule } from 'ngx-dropzone';
// import Swiper styles
register();


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ErroprimeComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // requis pour les animations ngx-toastr
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    CloudinaryModule,
    //NgxDropzoneModule

    
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
