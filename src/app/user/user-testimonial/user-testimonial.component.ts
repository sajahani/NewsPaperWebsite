import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-user-testimonial',
  templateUrl: './user-testimonial.component.html',
  styleUrls: ['./user-testimonial.component.css']
})
export class UserTestimonialComponent {



  constructor(public homeService : HomeService , public authService : AuthService){}
 

 TestimonialForm = new FormGroup(
    { 
      userid2:new FormControl(),
      message3 : new FormControl('')
    }
  )


  ngOnInit()
  { 
        let user:any = localStorage.getItem('user')
        user = JSON.parse(user);
        console.log(user.regid);

        this.TestimonialForm.get('userid2')?.setValue(Number(user.regid));

       this.homeService.GetAllAds();

  }

  CreateTestimonial()
  {
    this.homeService.CreateTestimonial(this.TestimonialForm.value);
  }

}
