import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarouselModule} from 'ngx-owl-carousel-o';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { CardAdsComponent } from './card-ads/card-ads.component';
//import {Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPrintModule} from 'ngx-print';
import { FontAwesomeModule ,FaIconLibrary } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    AdminSidebarComponent,
    CardAdsComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
   ReactiveFormsModule,
   CarouselModule,
   NgxPrintModule,
   FontAwesomeModule,
  
  

  ],
  exports :[
    HomeFooterComponent,
    HomeHeaderComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule,
    MatDialogModule,
    CardAdsComponent,
    NgxPrintModule,
    FontAwesomeModule,
  
   

  
   

  ]
})
export class SharedModule { }
