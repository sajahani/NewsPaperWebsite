import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {

  constructor(public authService : AuthService , private router : Router)
  {

  }

 OnLogout()
 {

     if(localStorage.getItem('token') &&  localStorage.getItem('user') != null )
     {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.clear()
      this.router.navigate(["/auth/login"])
      
     }
   

    console.log(localStorage.getItem('token'));
    
 }
}
