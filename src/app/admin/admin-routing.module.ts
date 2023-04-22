import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdsStatusComponent } from './ads-status/ads-status.component';
import { AdsTypeComponent } from './ads-type/ads-type.component';
import { ArticalsComponent } from './articals/articals.component';
import { ContactUsNewsManageComponent } from './contact-us-news-manage/contact-us-news-manage.component';
import { HomePageNewsComponent } from './home-page-news/home-page-news.component';
import { NewsManageComponent } from './news-manage/news-manage.component';
import { PublisherViewComponent } from './publisher-view/publisher-view.component';
import { SearchComponent } from './search/search.component';
import { TestmonialStatusComponent } from './testmonial-status/testmonial-status.component';
import { ChartComponent } from './chart/chart.component';
import { ChartAdsComponent } from './chart-ads/chart-ads.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [

  {
    path:"adminHome",
    component:AdminHomeComponent
  },
  {
    path:"news",
    component:NewsManageComponent
  },
 
  {
    path:"PublisherView",
    component:PublisherViewComponent
  },

  {
    path: "Articals",
    component: ArticalsComponent
  },
  {
    path: "AdsStatus",
    component: AdsStatusComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "TestmonialStatus",
    component: TestmonialStatusComponent
  },
  {
    path: "HomePageNews",
    component: HomePageNewsComponent
  },
  {
    path: "adsType",
    component: AdsTypeComponent
  },
  {
    path: "contactUsManage",
    component: ContactUsNewsManageComponent
  },
  {
    path:"profileadmin",
    component:AdminProfileComponent
  },
  {
    path:"chart",
   component:ChartComponent
  },
  {
    path:"chart2",
    component: ChartAdsComponent
  },
  {
    path:"allUser",
    component:UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
