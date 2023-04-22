import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsNewComponent } from './details-new/details-new.component';
import { MainComponent } from './main/main.component';

import { OurProductsComponent } from './our-products/our-products.component';

const routes: Routes = [
  {
    path:"",
    component : MainComponent
    
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"OurProduct",
    component:OurProductsComponent
  },

  {
  path : "DetailNew/:Id",
  component : DetailsNewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
