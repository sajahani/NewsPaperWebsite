import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ShowNewsComponent } from './show-news/show-news.component';
import { SharedModule } from '../shared/shared.module';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { YourAdsComponent } from './your-ads/your-ads.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { UserTestimonialComponent } from './user-testimonial/user-testimonial.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';


@NgModule({
  declarations: [
    ShowNewsComponent,
    AddAdsComponent,
    YourAdsComponent,
    ProfileUserComponent,
    UserTestimonialComponent,
    WishListPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
