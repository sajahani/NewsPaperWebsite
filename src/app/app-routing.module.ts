import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:"",
    loadChildren:()=>import('./home/home.module').then(x=> x.HomeModule)
  
  },

  {
    path:"admin",
    loadChildren:()=>import('./admin/admin.module').then(x=> x.AdminModule),
    canActivate :[AuthGuard]
  },
 
  {
    path:"auth",
    loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
  },
  {
    path:"publisher",
    loadChildren:()=>import('./publisher/publisher.module').then(x=>x.PublisherModule),
    canActivate :[AuthGuard]
  },
  {
    path:"user",
    loadChildren:()=>import('./user/user.module').then(x=>x.UserModule),
    canActivate :[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
