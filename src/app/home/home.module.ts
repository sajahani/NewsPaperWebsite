import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { DetailsNewComponent } from './details-new/details-new.component';


@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    MainComponent,
    CardComponent,
    OurProductsComponent,
    DetailsNewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
