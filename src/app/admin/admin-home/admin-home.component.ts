import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import { HomeService } from 'src/app/home.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private spinner: NgxSpinnerService,public adminService:AdminService , private dialog:MatDialog,public homeService : HomeService,public authSerivce : AuthService)
   
{

}

firstname : any ;
lastname : any ;
ngOnInit() {
  this.spinner.show();

  setTimeout(() => {
 
    this.spinner.hide();
  }, 3000);

  let user:any = localStorage.getItem('user')
  user = JSON.parse(user);
  let token :any = localStorage.getItem('token')
  //console.log(user.roleid);
  this.firstname = user.firstname;
  this.lastname = user.lastname;


  this.adminService.GetAllNumOfAds();
  this.adminService.GetAllNumOfUser();
  this.adminService.GetlastFiveRegistrations()

  this.homeService.GetWeather('Amman');
  
}








// ngOnInit1()
// {
//   this.adminService.GetAllNumOfAds();
//   console.log(this.adminService.AllNumOfAds);
// }


}

