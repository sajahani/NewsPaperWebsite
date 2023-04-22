import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {


  constructor(public homeService : HomeService , public authService : AuthService){
   
  }
 
  UpdateProfileForm = new FormGroup({
    regid: new FormControl(''),
    firstname3: new FormControl('') ,
    lastname3: new FormControl(''),
    password3: new FormControl('') ,
    email3: new FormControl(''),
    imagename3: new FormControl(''),
    


  })
  
 
   
 async ngOnInit()
  {
    let user:any = localStorage.getItem('user')
    user = JSON.parse(user);
    console.log(user.regid);
   await this.homeService.GetRegistrationNewsById(user.regid)
   await this.UpdateProfileForm.patchValue(this.homeService.Profile)

   console.log(this.homeService.Profile);


  }


  UploadUpdateImage(input: any) {
    if (input.files.length != 0)
    {
      let uploadedFile = input.files[0] 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.homeService.UploadImage(formData)
    }

  }
 
 async UpdateAdmin()
  {
      await this.homeService.UpdateProfile(this.UpdateProfileForm.value)
  }


}
