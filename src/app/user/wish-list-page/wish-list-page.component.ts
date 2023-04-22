import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css']
})
export class WishListPageComponent {


  constructor(public homeService : HomeService , public authService : AuthService){}

 async ngOnInit()
{


   let user:any = localStorage.getItem('user')
   user = JSON.parse(user);
   console.log(user.regid);

 await  this.homeService.getFavoruitUser(user.regid);


  
}
}
