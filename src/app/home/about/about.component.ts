import { Component } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public homeService : HomeService){}

  ngOnInit()
  {
    this.homeService.GetByHomepagenews(43);
  }

}
