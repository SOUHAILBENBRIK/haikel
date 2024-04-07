import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) },
  {path:'auth', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule) },
  {path:'client', loadChildren:()=>import('./client/client.module').then(m=>m.ClientModule), canActivate: [AuthGuard], data: { roles: ['CLIENT'] }}, 
  {path:'maker', loadChildren:()=>import('./maker/maker.module').then(m=>m.MakerModule) ,canActivate: [AuthGuard], data: { roles: ['MAKER'] }},
  {path:'company', loadChildren:()=>import('./company/company.module').then(m=>m.CompanyModule) },

  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
