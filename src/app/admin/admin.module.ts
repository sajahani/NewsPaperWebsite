import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdsTypeComponent } from './ads-type/ads-type.component';
import { AdsStatusComponent } from './ads-status/ads-status.component';
import { ArticalsComponent } from './articals/articals.component';
import { ChartComponent } from './chart/chart.component';
import { ContactUsNewsManageComponent } from './contact-us-news-manage/contact-us-news-manage.component';
import { HomePageNewsComponent } from './home-page-news/home-page-news.component';
import { NewsManageComponent } from './news-manage/news-manage.component';
import { PublisherViewComponent } from './publisher-view/publisher-view.component';
import { SearchComponent } from './search/search.component';
import { TestmonialStatusComponent } from './testmonial-status/testmonial-status.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ChartAdsComponent } from './chart-ads/chart-ads.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdsTypeComponent,
    AdsStatusComponent,
    ArticalsComponent,
    ChartComponent,
    ContactUsNewsManageComponent,
    HomePageNewsComponent,
    NewsManageComponent,
    PublisherViewComponent,
    SearchComponent,
    TestmonialStatusComponent,
    AdminProfileComponent,
    UserViewComponent,
    ChartAdsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
