import { Component ,AfterViewInit} from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { HomeService } from 'src/app/home.service';
import { OwlOptions} from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

  export class MainComponent {

  constructor(public homeService : HomeService){}
 

  ContactUsForm = new FormGroup(
    {
      fullname:new FormControl(''),
      email: new FormControl(''),
      message4 : new FormControl('')
    }
  )

TestimoialSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }






 async ngOnInit()
  {
    this.homeService.GetByHomepagenews(43);
    this.homeService.GettestmonialNewsByAcc();
    this.homeService.GetAllNewsPaper();

    await this.homeService.GetAllAds();
  }



  CreateContactusnews()
  {
       this.homeService.CreateContactusnews(this.ContactUsForm.value)
  }

  


}


