import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutmanufacturerComponent } from './layoutmanufacturer/layoutmanufacturer.component';
import { HeaderManufacturerComponent } from './header-manufacturer/header-manufacturer.component';

const routes: Routes = [


  {path:"", component: LayoutmanufacturerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }
