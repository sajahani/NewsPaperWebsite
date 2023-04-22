import { compileComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArticleComponent } from './form-article/form-article.component';
import { PublisherTestimonialComponent } from './publisher-testimonial/publisher-testimonial.component';
import { PublisherprofileComponent } from './publisherprofile/publisherprofile.component';
import { TypenewsComponent } from './typenews/typenews.component';

const routes: Routes = [
  {
    path : "typenews",
    component : TypenewsComponent
    
  },
  {
    path : "addarticle/:id",
    component:FormArticleComponent
  },
   {
    path : "publisherprofile",
    component:PublisherprofileComponent
  },
  {
    path:"Testimonail",
    component:PublisherTestimonialComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
