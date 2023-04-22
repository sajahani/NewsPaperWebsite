import { Component, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { AuthService } from 'src/app/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-ads',
  templateUrl: './your-ads.component.html',
  styleUrls: ['./your-ads.component.css']
})
export class YourAdsComponent {

   @ViewChild('CheckOutForm') checkoutform : any
   @ViewChild('DeleteForm') deleteform : any

constructor(public homeService : HomeService , public authService : AuthService, public dialog:MatDialog ,private router : Router){}


checkoutUserForm = new FormGroup(
   {
      cardnum3 : new FormControl('' ,[Validators.required]),
      cnn3 : new FormControl( '',[Validators.required] )
   }
)

 userid = 0;
ngOnInit()
{


   let user:any = localStorage.getItem('user')
   user = JSON.parse(user);
   console.log(user.regid);
    this.userid = Number(user.regid)
   this.homeService.GetAllAdsUser(user.regid);


  
}

 Useridselected = 0
 price = 0
OpenCheckOutDialog(userid : number , price : number)
{  this.Useridselected = userid ;
   this.price = price ;
   this.dialog.open(this.checkoutform)

}

checkoutUserfun()
{
   this.homeService.CheckOut(this.checkoutUserForm.value , this.Useridselected);
   this.router.navigate(["/user/shownews"]);
   console.log(this.checkoutUserForm.value);
   console.log(this.Useridselected);
   
}


selectedItem =0 ;
async DeleteAds()
{
  await this.homeService.DeleteAds(this.selectedItem)
  this.homeService.GetAllAdsUser(this.userid) ;

}


OpenDialogDelete(id :number)
{
  this.selectedItem= id
  this.dialog.open(this.deleteform)
}

}
