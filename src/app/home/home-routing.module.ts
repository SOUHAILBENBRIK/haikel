import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from './homelayout/homelayout.component';

const routes: Routes = [
  {path : '', component: HomelayoutComponent, children:[
    {path:'' , redirectTo:'', pathMatch: 'full'},
   
]}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
