import { Component , EventEmitter, Input, Output} from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card-ads',
  templateUrl: './card-ads.component.html',
  styleUrls: ['./card-ads.component.css']
})
export class CardAdsComponent {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  @Input() AllAds? : any 

}
