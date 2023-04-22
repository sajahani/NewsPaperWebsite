import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
  providers: [DatePipe]
})
export class AdminHeaderComponent {

  constructor(private datePipe: DatePipe , private router : Router , public authService : AuthService) {
  }
  today: number = Date.now();


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
