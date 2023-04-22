import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.css']
})
export class AddAdsComponent {

   constructor(public homeService : HomeService , public authService : AuthService ,
    private activeRoute : ActivatedRoute){}


  ngOnInit()
  { 
      let adsId = Number(this.activeRoute.snapshot.paramMap.get('id'));

        this.adsForm.get('typeid')?.setValue(adsId) ;

        let user:any = localStorage.getItem('user')
        user = JSON.parse(user);
        console.log(user.regid);

        this.adsForm.get('userid6')?.setValue(Number(user.regid))

        this.homeService.GetAdsUserspac(Number(user.regid));

  }

  adsForm = new FormGroup(
    { 
      title:new FormControl(''),
      adsdate : new FormControl(''),
      description : new FormControl(''),
      imageads : new FormControl(''),
      userid6 : new FormControl(),
      typeid: new FormControl ()
  
    })


  UploadImageAds(input: any) {
    if (input.files.length != 0) {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.homeService.uploadImageAds(formData)
    }

  }

   CreateAdsfun()
  {
    this.homeService.CreateAds(this.adsForm.value);
    console.log(this.adsForm.value);
    
  }


}
