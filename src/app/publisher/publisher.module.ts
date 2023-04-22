import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { TypenewsComponent } from './typenews/typenews.component';
import { SharedModule } from '../shared/shared.module';
import { FormArticleComponent } from './form-article/form-article.component';
import { PublisherprofileComponent } from './publisherprofile/publisherprofile.component';
import { PublisherTestimonialComponent } from './publisher-testimonial/publisher-testimonial.component';
import { ContactUserComponent } from './contact-user/contact-user.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    TypenewsComponent,
    FormArticleComponent,
    PublisherprofileComponent,
    PublisherTestimonialComponent,
    ContactUserComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class PublisherModule { }
