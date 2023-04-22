import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
  providers: [DatePipe]
})
export class HomeHeaderComponent {

 userRoleId: any = 0;

 firstname : any 
 lastname : any

  constructor(public authService : AuthService , private router : Router , public homeService : HomeService,private datePipe: DatePipe){}
    
  today: number = Date.now();

  ngOnInit()
  {
    let user:any = localStorage.getItem('user')
    user = JSON.parse(user);
    let token :any = localStorage.getItem('token')
    //console.log(user.roleid);
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.userRoleId = user.roleid ;

    this.homeService.GetByHomepagenews(43);

   

  }

  Logout()
  {
    if(localStorage.getItem('token') &&  localStorage.getItem('user') != null )
    {
     localStorage.removeItem('user')
     localStorage.removeItem('token')
     localStorage.clear()
     this.router.navigate(["/auth/login"])
     
    }
  }

}
