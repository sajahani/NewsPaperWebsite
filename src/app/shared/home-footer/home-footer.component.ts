import { Component } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent {
  constructor(public homeService : HomeService){}

   ngOnInit()
  {
    this.homeService.GetByHomepagenews(43);

  }
}
