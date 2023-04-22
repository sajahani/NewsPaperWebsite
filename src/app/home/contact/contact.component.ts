import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { HomeService } from 'src/app/home.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public homeService : HomeService){}
 

  ContactUsForm = new FormGroup(
    {
      fullname:new FormControl(''),
      email: new FormControl(''),
      message4 : new FormControl('')
    }
  )

  CreateContactusnews()
  {
       this.homeService.CreateContactusnews(this.ContactUsForm.value);
       this.homeService.GetByHomepagenews(43);
  }


}
