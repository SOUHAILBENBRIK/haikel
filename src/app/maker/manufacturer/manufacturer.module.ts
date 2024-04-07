import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { LayoutmanufacturerComponent } from './layoutmanufacturer/layoutmanufacturer.component';
import { HeaderManufacturerComponent } from './header-manufacturer/header-manufacturer.component';
import { ShareProfileComponent } from './share-profile/share-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MachinesMaterielComponent } from './machines-materiel/machines-materiel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    LayoutmanufacturerComponent,
    HeaderManufacturerComponent,
    ShareProfileComponent,
    ProfileComponent,
    GalleryComponent,
    MachinesMaterielComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
    NgxDropzoneModule,
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
  ]
})
export class ManufacturerModule { }
