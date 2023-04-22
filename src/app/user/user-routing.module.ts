import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ShowNewsComponent } from './show-news/show-news.component';
import { UserTestimonialComponent } from './user-testimonial/user-testimonial.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { YourAdsComponent } from './your-ads/your-ads.component';

const routes: Routes = [
  {
    path : "shownews",
    component:ShowNewsComponent
  },

  {
    path : "addads/:id",
    component:AddAdsComponent
  },
  {
    path : "checkout",
    component :YourAdsComponent
  },
  {
    path:"profileuser",
    component:ProfileUserComponent
  },
  {
    path:"wishlist",
    component:WishListPageComponent
  },
  {
    path:"testimonial",
    component:UserTestimonialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
